from flask import Blueprint, request
from app.models import MenuItem, Listing, db
# from ..models.db import db
from flask_login import current_user, login_required
from app.api.aws_helpers import remove_file_from_s3, get_unique_filename, upload_file_to_s3
from ..forms.menu_item_form import MenuItemForm

menu_item_routes = Blueprint('menu_item', __name__)

@menu_item_routes.route('/<int:id>')
#/api/menuitems/menuItemId
def get_menu_item_by_id(id):
    """
    Query for menu item by menu_item.id
    """
    one_menu_item = MenuItem.query.get(id)

    if not one_menu_item:
        return { "message": "Menu Item not found!" }, 404

    return one_menu_item.to_dict()


@menu_item_routes.route("/<int:menuItemId>", methods=["DELETE"])
@login_required
def delete_menu_item(menuItemId):
    """
    Delete a menu item and associated S3 files
    """
    menu_item_to_delete = MenuItem.query.get(menuItemId)

    if menu_item_to_delete:
        target_listing = Listing.query.get(menu_item_to_delete.listingId)
        if target_listing.owner_id == current_user.id: #req.user.id
            # Delete associated S3 files
            remove_file_from_s3(menu_item_to_delete.imageUrl)

            # Delete the menu item from the database
            db.session.delete(menu_item_to_delete)
            db.session.commit()
            return { "message": "Delete successful!" }
        else:
            return { "message": "FORBIDDEN" }, 403
    else:
        return { "message": "Menu Item not found!" }, 404


@menu_item_routes.route("/<int:menuItemId>", methods=["PUT"])
#/api/menuitems/menuItemId
@login_required
def update_menuitem(menuItemId):
    """
    update a current menu item
    """
    form = MenuItemForm()

    form["csrf_token"].data = request.cookies["csrf_token"]

    menu_item_to_update = MenuItem.query.get(menuItemId)
    listing_to_update = Listing.query.get(menu_item_to_update.listingId)
    #! CHECK !!!
    print("current_user.id", current_user.id)
    print("menu_item_to_update.listingId", menu_item_to_update.listingId)
    print( "listing_to_update =======>>" , listing_to_update)
    print( "listing_to_update..owner_id +++++++>>" , listing_to_update.owner_id)


    if listing_to_update.owner_id == current_user.id:
        # Delete associated S3 files
        remove_file_from_s3(menu_item_to_update.imageUrl)

        if form.validate_on_submit():
            image = form.data["imageUrl"] #! check this if things didn't work
            image.filename = get_unique_filename(image.filename)

            # Upload the image to S3
            upload = upload_file_to_s3(image)
            print(upload)

            if 'url' not in upload:
                return { "errors": "Error uploading image to S3" }, 400

            # Use the S3 URL
            image_url = upload['url']

            menu_item_to_update.name = form.data["name"]
            menu_item_to_update.size = form.data["size"]
            menu_item_to_update.calories = form.data["calories"]
            menu_item_to_update.price = form.data["price"]
            menu_item_to_update.description = form.data["description"]
            menu_item_to_update.imageUrl = image_url

            db.session.commit()
            return menu_item_to_update.to_dict()

        else:
            print(form.errors)
            return { "errors": form.errors }, 400

    else:
        return { "message": "FORBIDDEN" }, 403
