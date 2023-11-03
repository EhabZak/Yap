from flask.cli import AppGroup
from .users import seed_users, undo_users
from.listings import seed_listings, undo_listings
from .reviews import seed_reviews, undo_reviews
from .menu_items import seed_menu_items, undo_menu_items
from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_reviews()
        undo_menu_items()
        undo_listings()
        undo_users()
    seed_users()
    seed_listings()
    seed_menu_items()
    seed_reviews()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_reviews()
    undo_menu_items()
    undo_listings()
    undo_users()
    # Add other undo functions here
