from app.models import db, environment, SCHEMA, Review
from sqlalchemy.sql import text


def seed_reviews():
    review1 = Review(
        listing_id =1,
        user_id=1,
        review= "this is the place",
        stars=4
        )
    review2 = Review(
        listing_id =1,
        user_id=3,
        review= "the food here is so good",
        stars=5
        )
    review3 = Review(
        listing_id =2,
        user_id=1,
        review= "it's just always delicious!",
        stars=3
        )
    review4 = Review(
        listing_id =2,
        user_id=2,
        review= "Good food and good drinks",
        stars=4
        )
    review5 = Review(
        listing_id =3,
        user_id=1,
        review= "Finally got a chance to check this place out.  I drive by often enough to smell the hamburgers grilling or the smell of french fries!",
        stars=3
        )
    review6 = Review(
        listing_id =3,
        user_id=3,
        review= "The Habit easily ranks high on my list of favorite fast food burgers because the quality has always been great and I love some of the unique things that They offer",
        stars=4
        )
    review7 = Review(
        listing_id =4,
        user_id=1,
        review= "It's your one stop shop for household items, school supplies, and let's not forget all the awesome snacks",
        stars=4
        )
    review8 = Review(
        listing_id =4,
        user_id=2,
        review= "This Japanese Dollar Store has the most legit interesting stuff ever, compared to all Dollar Stores in America",
        stars=5
        )
    review9 = Review(
        listing_id =5,
        user_id=1,
        review= "Nice huge shopping center with the best range of stores. It also has a movie theater and lots of spas if you need to relax",
        stars=3
        )
    review10 = Review(
        listing_id =5,
        user_id=3,
        review= "This mall is one of my favorites in the Bay Area for multiple reasons",
        stars=4
        )
    review11 = Review(
        listing_id =6,
        user_id=1,
        review= "Great views and great service!",
        stars=5
        )
    review12 = Review(
        listing_id =6,
        user_id=2,
        review= "This is a great hotel bar if your preference is a lounge-type setting with one of the best views above the city.",
        stars=4
        )
    review13 = Review(
        listing_id =7,
        user_id=1,
        review= "Great location! The staff are welcoming. The line-up is always an experience. The ambiance is top-notch, Alice in Wonderland vibes.",
        stars=4
        )
    review14 = Review(
        listing_id =7,
        user_id=3,
        review= "Does what it says on the tin!",
        stars=5
        )
    review15 = Review(
        listing_id =8,
        user_id=1,
        review= "I came to this place multiple times. It's always windy so bring some clothes even you don't feel cold when you start your hiking.",
        stars=3
        )
    review16 = Review(
        listing_id =8,
        user_id=2,
        review= "If you want the best views of San Francisco, go to Twin Peaks.",
        stars=4
        )
    review17 = Review(
        listing_id =9,
        user_id=1,
        review= "My home gym since 2021, has a great variety of routes, and staffs are always friendly.",
        stars=5
        )
    review18 = Review(
        listing_id =9,
        user_id=3,
        review= "Great walls, however the staff seemed unfriendly. Just wanted to wring as much money from me as possible.",
        stars=3
        )
    review19 = Review(
        listing_id =10,
        user_id=1,
        review= "Nice locker room, 2 rooms to relax, a steam room, and delicious tea all available to use with an appointment",
        stars=4
        )
    review20 = Review(
        listing_id =10,
        user_id=2,
        review= "This place is top notch",
        stars=5
        )
    review21 = Review(
        listing_id =11,
        user_id=1,
        review= "From beginning to the end, my experience at Kabuki was stellar.",
        stars=5
        )
    review22 = Review(
        listing_id =11,
        user_id=3,
        review= "I feel truly pampered after spending a couple of hours here, and especially after an incredible revitalizing lift facial by Norma. ",
        stars=4
        )
    review23 = Review(
        listing_id =12,
        user_id=1,
        review= "My go-to oil change spot (Quality Tune Up) moved to merge with 76 gas station. The most honest car mechanic, Simon, also moved here.",
        stars=5
        )
    review24 = Review(
        listing_id =12,
        user_id=2,
        review= "Super nice shop and very respectful.  Allowed me to add a small amount of gas without prejudice.",
        stars=3
        )
    review25 = Review(
        listing_id =13,
        user_id=1,
        review= "Good place for ur car to be serviced and taken care of. The staff is very nice and great attitude. Price is reasonable too",
        stars=4
        )
    review26 = Review(
        listing_id =13,
        user_id=3,
        review= "Very responsive, professional and reasonably priced. Will definitely use this business in the future.",
        stars=5
        )
    review27 = Review(
        listing_id =14,
        user_id=1,
        review= "I've had the pleasure of working with Peace by Piece twice now for home organization, and the service they offer is great!",
        stars=3
        )
    review28 = Review(
        listing_id =14,
        user_id=2,
        review= "The PxP team is awesome and did a great job organizing and revamping our home in the East Bay.",
        stars=4
        )
    review29 = Review(
        listing_id =15,
        user_id=1,
        review= "We've been working with Andy for the last several months on our 3rd and 4th story addition project in upper Noe Valley.",
        stars=5
        )
    review30 = Review(
        listing_id =15,
        user_id=3,
        review= "Project was successfully finished and we are so Happy!",
        stars=4
        )

    reviews = [review1,review2,review3,review4,review5,review6,review7,
               review8,review9,review10,review11,review12,review13,review14,
               review15,review16,review17,review18,review19,review20,review21,
               review22,review23,review24,review25,review26,review27,
               review28,review29,review30]
    add_review = [db.session.add(review) for review in reviews ]
    db.session.commit()


def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
