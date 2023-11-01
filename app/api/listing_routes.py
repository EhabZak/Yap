from flask import Blueprint, jsonify, request, redirect
from app.models import db, Listing, User, Review, MenuItem
from ..forms.listing_form import ListingForm
from ..forms.menu_item_form import MenuItemForm
from ..forms.review_form import ReviewForm
from datetime import date

from flask_login import current_user, login_required
from .aws_helpers import get_unique_filename, upload_file_to_s3, remove_file_from_s3

listing_routes = Blueprint('listing', __name__)


@listing_routes.route('/')
def get_all_listings():
    """
    Query for all listings and returns them in a list of listing dictionaries
    """

    listings = Listing.query.all()
    reviews = Review.query.all()

    all_listing_list = [listing.to_dict() for listing in listings]
    all_review_list = [review.to_dict() for review in reviews]


    for listing_obj in all_listing_list:
        # print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>", listing_obj.review)
        listing_reviews = [ review for review in all_review_list if review["listing_id"] == listing_obj["id"] ]
        sum_stars = 0
        for listing_review in listing_reviews:
            sum_stars += listing_review["stars"]
        if sum_stars > 0:
            avg_rating = sum_stars / len(listing_reviews)
            listing_obj["avg_rating"] = avg_rating
            listing_obj["num_reviews"] = len(listing_reviews)

    return { "listings": all_listing_list}


@listing_routes.route('/<int:id>')
def get_listing_by_id(id):
    """
    Query for listing by listing.id
    """
    listing_to_get = Listing.query.get(id)
    # one_listing = Listing.query.get(id).to_dict()
    if listing_to_get is not None:
        one_listing = listing_to_get.to_dict()

        reviews = Review.query.all()
        all_reviews = [review.to_dict() for review in reviews]

        listing_reviews = [ review for review in all_reviews if review["listing_id"] == one_listing["id"] ]
        sum_stars = 0

        for review in listing_reviews:
            sum_stars += review["stars"]
        if sum_stars > 0:
            avg_rating = sum_stars / len(listing_reviews)
            one_listing["avg_rating"] = avg_rating
            one_listing["num_reviews"] = len(listing_reviews)

    # if not one_listing:
    #     return { "message": "Listing not found!" }, 404

        return one_listing
    else:
        return{"message": "Listing not found"}, 404



@listing_routes.route('/current')
@login_required
def get_owned_listings():
    """
    GET all owned listing route
    """

    all_listings = Listing.query.all()
    reviews = Review.query.all()
    owned_listings = [ listing.to_dict() for listing in all_listings if listing.owner_id == current_user.id ]

    all_review_list = [review.to_dict() for review in reviews]

    for listing_obj in owned_listings:
        listing_reviews = [ review for review in all_review_list if review["listing_id"] == listing_obj["id"] ]
        sum_stars = 0
        for listing_review in listing_reviews:
            sum_stars += listing_review["stars"]
        if sum_stars > 0:
            avg_rating = sum_stars / len(listing_reviews)
            listing_obj["avg_rating"] = avg_rating
            listing_obj["num_reviews"] = len(listing_reviews)


    return { "listings": owned_listings }

#! Create Listing ///////////////////////////////////////////////////////////////////////////

@listing_routes.route('/', methods=["POST"])
@login_required
def create_listing():
    """
    Route to post a new listing
    """

    form = ListingForm()

    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():

        image_url = form.data["image_url"]
        image_url.filename = get_unique_filename(image_url.filename)
        upload = upload_file_to_s3(image_url)

        print(upload)

        print ("url")

        if "url" not in upload:
            return { "errors": "Error uploading image to S3" }, 400 #! check if this is correct?

        new_listing = Listing(
            owner_id=current_user.id, #! this is where the owner id is coming from not from the front end
            address=form.data["address"],
            city=form.data["city"],
            state=form.data["state"],
            name=form.data["name"],
            category=form.data["category"],
            description= form.data["description"],
            price=form.data["price"],
            open_hours=form.data["open_hours"],
            close_hours=form.data["close_hours"],

            # image_url=form.data["image_url"],
            image_url=upload["url"],

            created_at = date.today(),
            updated_at = date.today()
        )
        db.session.add(new_listing)
        db.session.commit()
        return new_listing.to_dict(), 201

    else:
        print(form.errors)
        return { "errors": form.errors }, 400
#! //////////////////////////////////////////////////////////////////////////////////////////////////

@listing_routes.route("/<int:listingId>", methods=["PUT"]) #! I need to find how to update the AWS image here
@login_required
def update_listing(listingId):
    """
    Update a current listing
    """
    form = ListingForm()

    form["csrf_token"].data = request.cookies["csrf_token"]

    listing_to_update = Listing.query.get(listingId)
    # print( "listing_to_update =======>>" , listing_to_update)
    # print( "current_user.id +++++++++>>" , current_user.id)

    if listing_to_update.owner_id == current_user.id:
        # Delete associated S3 files
        remove_file_from_s3(listing_to_update.image_url)

        if form.validate_on_submit():
            image = form.data["image_url"]
            image.filename = get_unique_filename(image.filename)

            # Upload the image to S3
            upload = upload_file_to_s3(image)
            print(upload)

            if 'url' not in upload:
                return { "errors": "Error uploading image to S3" }, 400

            # Use the S3 URL
            image_url = upload['url']



            listing_to_update.address = form.data["address"]
            listing_to_update.city = form.data["city"]
            listing_to_update.state = form.data["state"]
            listing_to_update.name = form.data["name"]
            listing_to_update.category = form.data["category"]
            listing_to_update.description = form.data["description"]
            listing_to_update.price = form.data["price"]
            listing_to_update.open_hours = form.data["open_hours"]
            listing_to_update.close_hours = form.data["close_hours"]
            listing_to_update.image_url = image_url

            db.session.commit()
            return listing_to_update.to_dict()

        else:
            print(form.errors)
            return { "errors": form.errors }, 400

    else:
        return { "message": "FORBIDDEN" }, 403


@listing_routes.route("/<int:listingId>", methods=["DELETE"])
@login_required
def delete(listingId):
    """
    Delete a listing and associated S3 files
    """
    listing_to_delete = Listing.query.get(listingId)

    if listing_to_delete:
        if listing_to_delete.owner_id == current_user.id:

            file_delete =remove_file_from_s3(listing_to_delete.image_url)
            print("file delete", file_delete)

            if file_delete is True:
                db.session.delete(listing_to_delete)
                db.session.commit()
                return { "message": "Delete successful!" }
            else:
                return {"error": "failed to delete the file from S3"}, 500
        else:
            return { "message": "FORBIDDEN" }, 403
    else:
        return { "message": "Listing not found!" }, 404



@listing_routes.route('/<int:listingId>/reviews')
def get_listing_reviews(listingId):
    """
    Query for all reviews for a specific listing
    """

    all_reviews = Review.query.all()

    listing_reviews = [review.to_dict() for review in all_reviews if review.listing_id == listingId]

    return listing_reviews


@listing_routes.route('/<int:listingId>/createreview', methods=["POST"])
@login_required
def create_review(listingId):
    """
    Route to post a new review
    """

    form = ReviewForm()

    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():

        new_review = Review(
            listing_id=listingId,
            user_id=current_user.id,
            review=form.data["review"],
            stars=form.data["stars"],
            created_at = date.today(),
            updated_at = date.today()
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict(), 201

    else:
        print(form.errors)
        return { "errors": form.errors }, 400
