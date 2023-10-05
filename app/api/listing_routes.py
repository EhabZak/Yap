from flask import Blueprint, jsonify, request, redirect
from app.models import db, Listing, User, Review
from ..forms.listing_form import ListingForm

# from ..forms.review_form import ReviewForm
from datetime import date

from flask_login import current_user, login_required


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
        # print("======>", listing_obj.review)
        listing_reviews = [ review for review in all_review_list if review["listing_id"] == listing_obj["id"] ]
        sum_stars = 0
        for listing_review in listing_reviews:
            sum_stars += listing_review["stars"]
        if sum_stars > 0:
            avg_rating = sum_stars / len(listing_reviews)
            listing_obj["avg_rating"] = avg_rating
            listing_obj["num_reviews"] = len(listing_reviews)

    return { "listings": all_listing_list}
