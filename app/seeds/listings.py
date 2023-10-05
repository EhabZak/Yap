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
        description= "Lazy Dog serves handcrafted American food and drink with seasonally-inspired ingredients. When you walk in, you get a small mountain town vibe from the warm",
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
        description= "In-N-Out Burger is known for its unwavering commitment to fresh, high-quality ingredients and a classic menu that has stood the test of time, delighting customers for generations",
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
        description= "",
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
        description= "Daiso Japan, is a renowned international retail brand offering an extensive range of affordable, high-quality products, from household goods to lifestyle items, providing customers with value and variety",
        price=2,
        open_hours="10:00",
        close_hours="6:00",
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/RO20NATp5RoHgorVhSWqqw/o.jpg"
        )
    westfield_centre = Listing(
        owner_id=2,
        address="865 Market St",
        city="San Francisco",
        state="California",
        name="Westfield San Francisco Centre",
        category="shopping",
        description= "Located just two blocks from famed Union Square, Westfield San Francisco Centre has emerged as one of the most enticing downtown retail venues in the United States.",
        price=2,
        open_hours="10:00",
        close_hours="6:00",
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/Uh0L1l4LDTRu4Zv8op506w/o.jpg"
        )
    cityscape = Listing(
        owner_id=3,
        address="333 O'Farrell St",
        city="San Francisco",
        state="California",
        name="CityScape",
        category="nightlife",
        description= "Cityscape Lounge is the tallest sky bar in San Francisco and offers stunning 360° views of the City by the Bay.",
        price=1,
        open_hours="6:00",
        close_hours="12:00",
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/1CeBsagKk-Q_xSDRCNL76w/o.jpg"
        )
    cheaper_than_therapy = Listing(
        owner_id=2,
        address="533 Sutter St Shelton Theater",
        city="San Francisco",
        state="California",
        name="Cheaper Than Therapy",
        category="nightlife",
        description= "Stand-up comedy every weekend: come see it on Wednesdays & Thursdays at 8pm, Fridays & Saturdays at 8pm or 10pm, and Sundays at 8pm.",
        price=1,
        open_hours="8:00",
        close_hours="12:00",
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/jwk0g8QRz1trIGEzyGEggA/o.jpg"
        )
    twin_peaks = Listing(
        owner_id=3,
        address="501 Twin Peaks Blvd",
        city="San Francisco",
        state="California",
        name="Twin Peaks",
        category="active life",
        description= "At 922 feet in elevation, Twin Peaks is second only to Mt. Davidson in height, offers spectacular views of the Bay Area, and is a world-famous tourist attraction.",
        price=1,
        open_hours="10:00",
        close_hours="6:00",
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/HTpMkkBaxa9rYIxiq_WU5A/o.jpg"
        )
    dogpatch_boulders = Listing(
        owner_id=2,
        address="2573 3rd St",
        city="San Francisco",
        state="California",
        name="Dogpatch Boulders",
        category="active life",
        description= "we are Bouldering only gym . We have lot of problems and  a competition wall.  We also have grading and route setting .Please visit us with your friends, it's fun!",
        price=1,
        open_hours="10:00",
        close_hours="6:00",
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/hsnS0_XLlqKiVZqHF0nR3Q/o.jpg"
        )
    sen_spa = Listing(
        owner_id=3,
        address="1161 Gorgas Ave",
        city="San Francisco",
        state="California",
        name="SenSpa",
        category="Spa",
        description= "Award winning SenSpa, is a great place to relax and unwind with a therapeutic massage. Release, restore and rejuvenate in our 5-star luxury resort-style day spa.",
        price=1,
        open_hours="10:00",
        close_hours="6:00",
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/AUu3TkM11rxytgArETXxhg/o.jpg"
        )
    kabuki_spa = Listing(
        owner_id=2,
        address="1750 Geary Blvd",
        city="San Francisco",
        state="California",
        name="Kabuki Springs & Spa",
        category="Spa",
        description= "Kabuki Springs & Spa is an oasis of serenity in the heart of San Francisco, providing massage therapy, botanical facials and other spa treatments.",
        price=1,
        open_hours="10:00",
        close_hours="6:00",
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/rfznaeU3su7nKVQPky0uyg/o.jpg"
        )
    sunset_76 = Listing(
        owner_id=3,
        address="1700 Noriega St",
        city="San Francisco",
        state="California",
        name="Sunset 76 Auto Repair & Tire Center",
        category="automotive",
        description= "We are a full service Auto Repair Shop / Tire Sales Center / Smog Check & Smog Repair Center. We also specialize in Heating, Air Conditioning & Electrical Systems.",
        price=1,
        open_hours="10:00",
        close_hours="6:00",
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/tjryGCvpsUrvc7NAcazcuQ/o.jpg"
        )
    international_motors = Listing(
        owner_id=2,
        address="440 9th St",
        city="San Francisco",
        state="California",
        name="International Sport Motors",
        category="automotive",
        description= "Since 1980, International Sport Motors of San Francisco has been pairing personal service with quality workmanship to serve our customers to the highest standards possible.",
        price=1,
        open_hours="10:00",
        close_hours="6:00",
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/7I-4JrKFoV8EfYMxSXmVRg/o.jpg"
        )
    peace_by_piece = Listing(
        owner_id=3,
        address="121 4th St # 135",
        city="San Francisco",
        state="California",
        name="Peace By Piece Professional Organizing",
        category="home services",
        description= "We are a Professional Organizing company that offers various services to fit your organizing needs.",
        price=1,
        open_hours="10:00",
        close_hours="6:00",
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/ZneG6tvvoW2EOccLzEkHjg/o.jpg"
        )
    architect  = Listing(
        owner_id=2,
        address="2730 Mission",
        city="San Francisco",
        state="California",
        name="Architect Andrew Morrall",
        category="home services",
        description= "We are an Award Winning Architectural Office with projects ranging from Kitchen and Bath Remodels, Small and Large Residential Additions and Remodels",
        price=1,
        open_hours="10:00",
        close_hours="6:00",
        image_url="https://s3-media0.fl.yelpcdn.com/bphoto/PL3lQgpk2fNNEQDDeV64tw/o.jpg"
        )

    listings = [lazy_dog, in_n_out, the_habit, daiso_japan, westfield_centre, cityscape, cheaper_than_therapy, twin_peaks, dogpatch_boulders, sen_spa, kabuki_spa, sunset_76, international_motors, peace_by_piece, architect]
    add_listing = [db.session.add(listing) for listing in listings]
    db.session.commit()


def undo_listings():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.listings RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM listings"))

    db.session.commit()
