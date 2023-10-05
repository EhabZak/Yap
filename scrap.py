from app.models import db, Listing, environment, SCHEMA
from sqlalchemy.sql import text


def seed_listings():
    lazy_dog = Listing(
        owner_id=2,
        address="2208 Bridge point Pkwy",
        city="San Mateo",
        state="California",
        name="Lazy Dog Restaurant & Bar",
        category="restaurant",
        price=2,
        open_hours="10:00",
        close_hours="10:00",
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/DLROxJOHtWvBK81GKtbqYw/o.jpg"
        )
    in_n_out = Listing(
        owner_id=3,
        address="11 Rollins Rd",
        city="Millbrae",
        state="California",
        name="In-N-Out Burger",
        category="restaurant",
        price=1,
        open_hours="10:00",
        close_hours="10:00",
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/wbTCrzYxxoYieNlU_csQxg/o.jpg"
        )
    the_habit = Listing(
        owner_id=2,
        address="143 S. El Camino Real",
        city="Millbrae",
        state="California",
        name="The Habit Burger Grill",
        category="restaurant",
        price=2,
        open_hours="10:00",
        close_hours="10:00",
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/UlCNUQ62zanjCYGzx1l8Eg/o.jpg"
        )
    daiso_japan = Listing(
        owner_id=3,
        address="22 Peace Plz Ste 400",
        city="San Francisco",
        state="California",
        name="Daiso Japan",
        category="shopping",
        price=2,
        open_hours="10:00",
        close_hours="6:00",
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/RO20NATp5RoHgorVhSWqqw/o.jpg"
        )
    westfield_san_francisco_centre = Listing(
        owner_id=2,
        address="865 Market St",
        city="San Francisco",
        state="California",
        name="Westfield San Francisco Centre",
        category="shopping",
        price=2,
        open_hours="10:00",
        close_hours="6:00",
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/Uh0L1l4LDTRu4Zv8op506w/o.jpg"
        )
    cityscape = Listing(
        owner_id=3,
        address="1100 Fillmore St",
        city="San Francisco",
        state="California",
        name="CityScape",
        category="nightlife",
        price=1,
        open_hours="6:00",
        close_hours="12:00",
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/54554a83f0a2de9ac27c7ddc7d2ab616/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
        )
    cheaper_than_therapy = Listing(
        owner_id=2,
        address="1690 Valencia Street",
        city="San Francisco",
        state="California",
        name="Cheaper Than Therapy",
        category="nightlife",
        price=1,
        open_hours="6:00",
        close_hours="12:00",
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/782c426f0b99cf130156387f63d940ee/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
        )
    twin_peaks = Listing(
        owner_id=3,
        address="845 Market Street",
        city="San Francisco",
        state="California",
        name="Twin Peaks",
        category="active life",
        price=1,
        open_hours="10:00",
        close_hours="6:00",
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/66e0f9d70b3fb76cbec9ec5203d4cfea/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
        )
    dogpatch_boulders = Listing(
        owner_id=2,
        address="1390 Market Street",
        city="San Francisco",
        state="California",
        name="Dogpatch Boulders",
        category="active life",
        price=1,
        open_hours="10:00",
        close_hours="6:00",
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/cc2c3b81f1e02e1dcbffa7e0c9fdd2a1/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
        )
    senspa = Listing(
        owner_id=3,
        address="180 S. Airport Blvd",
        city="San Francisco",
        state="California",
        name="SenSpa",
        category="Spa",
        price=1,
        open_hours="10:00",
        close_hours="6:00",
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/df2de7977509b3697cd12d679c8571c2/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
        )
    kabuki_springs_spa = Listing(
        owner_id=2,
        address="801 Van Ness Ave",
        city="San Francisco",
        state="California",
        name="Kabuki Springs & Spa",
        category="Spa",
        price=1,
        open_hours="10:00",
        close_hours="6:00",
        image_url="https://d1ralsognjng37.cloudfront.net/040383f7-d215-4457-aaf0-eaffcc0b911d.jpeg"
        )
    sunset_76 = Listing(
        owner_id=3,
        address="553 El Camino Real",
        city="San Francisco",
        state="California",
        name="Sunset 76 Auto Repair & Tire Center",
        category="automotive",
        price=1,
        open_hours="10:00",
        close_hours="6:00",
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/b0fc9bc24d1656626221131e1aefe4fb/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
        )
    international_motors = Listing(
        owner_id=2,
        address="710 Third Street",
        city="San Francisco",
        state="California",
        name="International Sport Motors",
        category="automotive",
        price=1,
        open_hours="10:00",
        close_hours="6:00",
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/2fe4e1a8e9ee737e5e43d1310484bd94/c9252e6c6cd289c588c3381bc77b1dfc.jpeg"
        )
    peace_by_piece = Listing(
        owner_id=3,
        address="121 4th St # 135",
        city="San Francisco",
        state="California",
        name="Peace By Piece Professional Organizing",
        category="home services",
        price=1,
        open_hours="10:00",
        close_hours="6:00",
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/b5ff39e46a5e8acddfc40298cbe9ea23/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
        )
    architect  = Listing(
        owner_id=2,
        address="307 Gellert Blvd ",
        city="San Francisco",
        state="California",
        name="Architect Andrew Morrall",
        category="home services",
        price=1,
        open_hours="10:00",
        close_hours="6:00",
        image_url="https://tb-static.uber.com/prod/image-proc/processed_images/5068731aed89cc0b39e6231f5ccb9bc2/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
        )

    listings = [panda_express, popeyes, buffalo_wild_wings, applebees, dennys, mcdonalds, burger_king, shake_shack, starbucks, dunkin, round_table, pizza_hut, taco_bell, chipotle, panera]
    add_listing = [db.session.add(listing) for listing in listings]
    db.session.commit()


def undo_listings():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.listings RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM listings"))

    db.session.commit()
