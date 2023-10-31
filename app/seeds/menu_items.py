from app.models import db, MenuItem, environment, SCHEMA
from sqlalchemy.sql import text

def seed_menu_items():



    #Restaurant 1 (lazy_dog)
    menu_item_19 = MenuItem(
        listingId=1,
        name="Bourbon Street Chicken & Shrimp",
        calories=790,
        price=29.19,
        description="Let the good times roll with Cajun-seasoned chicken and blackened shrimp in buttery garlic and parsley, served sizzling on a cast iron platter with sautéed mushrooms and onions. Served with your choice of side.",
        imageUrl="https://applebeescanada.com/wp-content/uploads/2020/12/bourbon-st-chicken-shrimp-mashed-potatoes-applebees-canada.jpg"
    )
    menu_item_20 = MenuItem(
        listingId=1,
        name="Double-Glazed Baby Back Ribs",
        calories=1440,
        price=38.29,
        description="Full Rack. Slow-cooked to fall off the bone tenderness. Slathered with your choice of sauce. Shown with signature coleslaw and classic fries.",
        imageUrl="https://i.pinimg.com/1200x/14/ce/f0/14cef00c0a52ef34f380a3b5fe573a9a.jpg"
    )
    menu_item_21 = MenuItem(
        listingId=1,
        name="The Classic Combo",
        calories=2230,
        price=27.29,
        description="All the classic apps you love – Boneless Wings, Spinach & Artichoke Dip, Chicken Quesadilla, and Mozzarella Sticks.",
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/2018-08-16_21_23_41_Classic_appetizer_combo_%28Chips_with_spinach-artichoke_dip%2C_mozzarella_sticks%2C_honey-bbq_buffalo_wings_and_chicken_quesadilla%29_at_the_Applebee%27s_in_Fair_Lakes%2C_Fairfax_County%2C_Virginia.jpg/1200px-thumbnail.jpg"
    )
    menu_item_22 = MenuItem(
        listingId=1,
        name="Crispy Chicken Tender Salad",
        calories=1200,
        price=24.49,
        description="A hearty salad with crispy chicken tenders on a bed of fresh greens topped with a blend of Cheddar cheeses and tomatoes. Served with honey Dijon mustard dressing on the side. Served with a golden brown signature breadstick brushed with buttery garlic and parsley.",
        imageUrl="https://easychickenrecipes.com/wp-content/uploads/2020/08/applebees-oriental-chicken-salad-copycat-1-of-7.jpg"
    )
    menu_item_23 = MenuItem(
        listingId=1,
        name="Kids Grilled Chicken Alfredo",
        calories=670,
        price=10.69,
        description="Oodles of noodles covered with a creamy Alfredo sauce, then tossed with diced chicken and sprinkled with shredded Parmesan cheese. Comes with a choice of side and drink.",
        imageUrl="https://media.olivegarden.com/en_us/images/product/Kids-Meals-Fett-Alf-gv-590x365.jpg"
    )
    menu_item_24 = MenuItem(
        listingId=1,
        name="Triple Chocolate Meltdown",
        calories=850,
        price=14.99,
        description="Warm, rich, fudge-filled chocolate cake is drizzled with hot fudge. Served with vanilla ice cream.",
        imageUrl="https://www.restaurantmagazine.com/wp-content/uploads/2019/11/FREE-Triple-Chocolate-Meltdown-Is-On-the-Menu-at-Select-Applebees-in-Texas-on-Black-Friday.jpg"
    )

    lazy_items = [menu_item_19, menu_item_20, menu_item_21, menu_item_22, menu_item_23, menu_item_24]
    add_lazy_items = [db.session.add(lazy_item) for lazy_item in lazy_items]
    db.session.commit()

    # Restaurant #2 (In-N-Out Burger)
    menu_item_37 = MenuItem(
        listingId = 2,
        name = "Whopper",
        price = 7.99,
        description = "A ¼ lb* of flame-grilled beef with juicy tomatoes, crisp lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a toasted sesame seed bun. *Weight based on pre-cooked patty.",
        imageUrl = "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/84743a96a55cb36ef603c512d5b97c9141c40a33-1333x1333.png?w=900&q=80&fit=max&auto=format"
    )
    menu_item_38 = MenuItem(
        listingId = 2,
        name = "Original Chicken Sandwich",
        price = 6.49,
        description = "Lightly breaded chicken topped with crisp lettuce and creamy mayonnaise on a sesame seed bun.",
        imageUrl = "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/fc7c2a73e7a9bf14f3e3401bedcc090c4f421c67-1333x1333.png"
    )
    menu_item_39 = MenuItem(
        listingId = 2,
        name = "Fries",
        price = 6.99,
        description = "Crispy fries perfect for dipping in any of our delicious dipping sauces.",
        imageUrl = "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg"
    )
    menu_item_40 = MenuItem(
        listingId = 2,
        name = "Big King",
        price = 5.99,
        description = "Two flame-grilled beef patties topped with crisp lettuce, sliced white onion, crunchy pickles, melty American cheese and our signature stacker sauce on a toasted sesame seed bun.",
        imageUrl = "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/d06846598b47ff0ae865299a30b2826993567e9c-1333x1333.png"
    )
    menu_item_41 = MenuItem(
        listingId = 2,
        name = "Onion Rings",
        price = 3.49,
        description = "Golden brown, hot, and crispy.",
        imageUrl = "https://images.pexels.com/photos/9738991/pexels-photo-9738991.jpeg"
    )
    menu_item_42 = MenuItem(
        listingId = 2,
        name = "Classic Oreo Shake",
        price = 5.99,
        description = "Creamy, vanilla soft serve mixed with OREO® cookie pieces and vanilla sauce. OREO® is a registered trademark of Mondelēz International group. Used under license.",
        imageUrl = "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/37078b3ec851acc9d27a8024cfeedb7c1ce23b46-1333x1333.png"
    )

    inout_items = [menu_item_37, menu_item_38, menu_item_39, menu_item_40, menu_item_41, menu_item_42]
    add_inout_items = [db.session.add(inout_item) for inout_item in inout_items]
    db.session.commit()

  # Restaurant #3 (Shake Shack)
    menu_item_43 = MenuItem(
        listingId = 3,
        name = "Habit Burger",
        calories = 500,
        price = 8.29,
        description = "Angus beef cheeseburger with lettuce, tomato, and ShackSauce on a toasted potato bun (contains sesame, eggs, milk, soy, wheat, and gluten)",
        imageUrl = "https://d2luv1saso99wi.cloudfront.net/2022_Digital-Menu_Burgers_ShackBurger_1500x920_lg1663589553.jpeg"
    )
    menu_item_44 = MenuItem(
        listingId = 3,
        name = "Golden State Double",
        calories = 560,
        price = 10.69,
        description = "Richards Grass fed Beef double cheddar cheeseburger topped with pickles and smoked garlic aioli (contains sesame, milk, wheat, egg, and gluten)",
        imageUrl = "https://d2luv1saso99wi.cloudfront.net/2022_Digital-Menu_Burgers_GoldenStateDouble_1500x920_lg1663590761.jpeg"
    )
    menu_item_45 = MenuItem(
        listingId = 3,
        name = "Hot Chicken",
        calories = 570,
        price = 10.79,
        description = "Crispy, white-meat chicken breast spiced with our own hot pepper blend, topped with pickles and Shack-made cherry pepper slaw.",
        imageUrl = "https://d2luv1saso99wi.cloudfront.net/Kiosk_Menu_product_photo_1500x920_v_copy_lg1693581369.jpeg"
    )
    menu_item_46 = MenuItem(
        listingId = 3,
        name = "Avocado Bacon Burger",
        calories = 610,
        price = 10.09,
        description = "Angus beef cheeseburger topped with freshly sliced avocado, applewood-smoked bacon, and ShackSauce on a toasted potato bun (contains sesame, eggs, milk, soy, wheat, and gluten)",
        imageUrl = "https://d2luv1saso99wi.cloudfront.net/2023-06_SHA_Avocado-Bacon_Digital-Menu_1500x920_Burger_lg1689678265.jpeg"
    )
    menu_item_47 = MenuItem(
        listingId = 3,
        name = "Bacon Cheese Fries",
        calories = 840,
        price = 7.49,
        description = "Crispy crinkle cuts topped with our cheese sauce and applewood-smoked bacon (contains soy and milk)",
        imageUrl = "https://images.pexels.com/photos/13998988/pexels-photo-13998988.jpeg"
    )
    menu_item_48 = MenuItem(
        listingId = 3,
        name = "Fifty/Fifty",
        size = "Medium",
        calories = 80,
        price = 4.59,
        description = "Half lemonade, half organic iced tea",
        imageUrl = "https://images.pexels.com/photos/40594/lemon-tea-cold-beverages-summer-offerings-40594.jpeg"
    )

    habit_items = [menu_item_43, menu_item_44, menu_item_45, menu_item_46, menu_item_47, menu_item_48]
    add_habit_items = [db.session.add(habit_item) for habit_item in habit_items]
    db.session.commit()

    # Restaurant #9 (Starbucks)
    menu_item_49 = MenuItem(
        listingId = 16, #! needs to be changed for all them the number and the restaurant to listing
        name = "Iced Matcha Tea Latte",
        size = "Grande",
        calories = 200,
        price = 5.55,
        description = "Smooth and creamy matcha sweetened just right and served with milk over ice. Green has never tasted so good.",
        imageUrl = "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20181127_IcedMatchaGreenTeaLatte.jpg?impolicy=1by1_wide_topcrop_630"
    )
    menu_item_50 = MenuItem(
        listingId = 16,
        name = "Pumpkin Spice Latte",
        size = "Grande",
        price = 6.45,
        calories = 210,
        description = "Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg and clove. Enjoy it topped with whipped cream and real pumpkin-pie spices.",
        imageUrl = "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20220411_PumpkinSpiceLatte.jpg?impolicy=1by1_wide_topcrop_630"
    )
    menu_item_51 = MenuItem(
        listingId = 16,
        name = "Crispy Grilled Cheese on Sourdough",
        price = 8.15,
        calories = 520,
        description = "A blend of white Cheddar and mozzarella cheeses on sourdough bread, topped with a Parmesan butter spread. - VEGETARIAN - HIGH-PROTEIN",
        imageUrl = "https://globalassets.starbucks.com/digitalassets/products/food/SBX20220207_GrilledCheeseOnSourdough_US.jpg?impolicy=1by1_medium_630"
    )
    menu_item_52 = MenuItem(
        listingId = 16,
        name = "Turkey, Provolone & Pesto on Ciabatta",
        price = 8.75,
        calories = 520,
        description = "Thick-sliced turkey breast, melted provolone cheese, dry-roasted red peppers and basil pesto on a ciabatta roll. -HIGH-PROTEIN",
        imageUrl = "https://globalassets.starbucks.com/digitalassets/products/food/SBX20221006_TurkeyProvolonePestoOnCiabatta.jpg?impolicy=1by1_medium_630"
    )
    menu_item_53 = MenuItem(
        listingId = 16,
        name = "Avocado Spread",
        price = 1.65,
        calories = 90,
        description = "Avocadoes mixed with lime, sea salt, garlic and a touch of spice—specially packaged to maintain freshness without the use of heat, additives or preservatives.",
        imageUrl = "https://globalassets.starbucks.com/assets/3d32d9ac0991482596873baa3f649211.jpg?impolicy=1by1_medium_630"
    )
    menu_item_54 = MenuItem(
        listingId = 16,
        name = "Owl Cake Pop",
        price = 3.95,
        calories = 160,
        description = "Vanilla cake mixed with buttercream, dipped in purple chocolaty icing and decorated with an owl-face design. -VEGETARIAN",
        imageUrl = "https://globalassets.starbucks.com/digitalassets/products/food/SBX20220329_OwlCakePop.jpg?impolicy=1by1_medium_630"
    )

    starbucks_items = [menu_item_49, menu_item_50, menu_item_51, menu_item_52, menu_item_53, menu_item_54]
    add_starbucks_items = [db.session.add(starbucks_item) for starbucks_item in starbucks_items]
    db.session.commit()

    # Restaurant #17 (Dunkin')
    menu_item_55 = MenuItem(
        listingId = 17,
        name = "Bacon Egg and Cheese",
        price = 6.61,
        description = "Go the extra mile by bringing bacon to your Dunkin' Breakfast Sandwich. Bacon with egg and cheese, can you say, 'Yum!'",
        imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe-GXjudrDujhe0o8eqgK7o4DRDCoYHk-mNTGrnP4YLjSr1Ye7XpWpH0OWq0UdoYmRsUQ&usqp=CAU"
    )
    menu_item_56 = MenuItem(
        listingId = 17,
        name = "Maple Sugar Bacon Breakfast Sandwich",
        price = 7.11,
        description = "Maple sugar caramelized bacon, white cheddar cheese and egg on a buttery croissant.",
        imageUrl = "https://miro.medium.com/v2/resize:fit:1024/1*aveFRFggV77rbVI60km1oQ.jpeg"
    )
    menu_item_57 = MenuItem(
        listingId = 17,
        name = "Hash Browns",
        price = 2.11,
        description = "Our hash browns are lightly seasoned, crispy bites of gooDDness. Pair them with your breakfast sandwich and your morning pit stop gets even more tasty. Perfectly paired with our freshly brewed Hot or Iced Coffee.",
        imageUrl = "https://s3.amazonaws.com/cms.ipressroom.com/285/files/20192/5c9e35272cfac2490fdc7852_LP-promo-x1-hashbrowns-620x506_201903291509/LP-promo-x1-hashbrowns-620x506_201903291509_ea8de74d-b3c4-45ac-b389-570905f54ba4-prv.jpg"
    )
    menu_item_58 = MenuItem(
        listingId = 17,
        name = "Maple Sugar Snackin' Bacon",
        price = 3.98,
        description = "8 snack-sized strips of Maple Sugar Bacon",
        imageUrl = "https://s3.amazonaws.com/cms.ipressroom.com/285/files/20201/5e5585372cfac21b16bed14a_DNK01046_SnackingBacon_lib_RGB/DNK01046_SnackingBacon_lib_RGB_82f4bb3d-f1d2-4087-9db6-89374a79da56-prv.jpg"
    )
    menu_item_59 = MenuItem(
        listingId = 17,
        name = "Classic Donut",
        price = 2.48,
        description = "Treat yourself or share the joy by bringing people together with a dozen donuts made in these delicious varieties*: Glazed, Chocolate Frosted, Strawberry Frosted, Old Fashioned, Boston Kreme, Glazed Chocolate Cake and Jelly. *Limited Edition and Custom Photo Donuts may contain artificial dyes.",
        imageUrl = "https://www.boston.com/wp-content/uploads/2015/09/4_edit.jpg"
    )
    menu_item_60 = MenuItem(
        listingId = 17,
        name = "Latte",
        price = 5.86,
        description = "Made with warm, frothy milk and blended with our rich espresso, our Latte is the perfect balance of creamy and smooth to get you goin'.",
        imageUrl = "https://www.dunkindonuts.com/content/dam/dd/img/menu-redesign-v2/570x570/hot-latte.png"
    )

    dunkin_items = [menu_item_55, menu_item_56, menu_item_57, menu_item_58, menu_item_59, menu_item_60]
    add_dunkin_items = [db.session.add(dunkin_item) for dunkin_item in dunkin_items]
    db.session.commit()

    # rRestaurant #18 (Round Table Pizza)
    menu_item_61 = MenuItem(
        listingId = 18,
        name = "Montague's All Meat Marvel Pizza",
        size = "Large",
        price = 34.99,
        description = "Italian sausage, pepperoni, salami, linguiça on zesty red sauce.",
        imageUrl = "https://ordering.roundtablepizza.com/Site/Images/Customers/RT_MontagueAllMeatMarvel.jpg"
    )
    menu_item_62 = MenuItem(
        listingId = 18,
        name = "King Arthur's Supreme Pizza",
        size = "Large",
        price = 34.99,
        description = "Pepperoni, Italian sausage, salami, linguiça, mushrooms, green peppers, yellow onions, black olives on zesty red sauce (anchovies on request).",
        imageUrl = "https://ordering.roundtablepizza.com/Site/Images/Customers/RTP_thumbnails_pizza_king_arthur.jpg"
    )
    menu_item_63 = MenuItem(
        listingId = 18,
        name = "Double Play Pepperoni",
        size = "Large",
        price = 34.99,
        description = "Two Kinds of Pepperoni, All Kinds of Flavor! Classic pepperoni, and new Mini Pepperoni on zesty red sauce.",
        imageUrl = "https://ordering.roundtablepizza.com/Site/Images/Customers/DoublePep.jpg"
    )
    menu_item_64 = MenuItem(
        listingId = 18,
        name = "Wombo Combo Pizza",
        size = "Large",
        price = 34.99,
        description = "Primo pepperoni, Italian sausage, linguiça, bacon, mushrooms, tomatoes, artichoke hearts, green onions on zesty red sauce. THAT AIN'T FALCO!",
        imageUrl = "https://i.pinimg.com/1200x/c7/ec/da/c7ecda84ec00aa1fe7f0cc196dae9754.jpg"
    )
    menu_item_65 = MenuItem(
        listingId = 18,
        name = "King Chocolate Chip Cookie",
        price = 14.99,
        description = "The ultimate 8 inch chocolate chip cookie, freshly baked and hot from the oven.",
        imageUrl = "https://ordering.roundtablepizza.com/Site/Images/Customers/RTP_ChocChipParty.jpg"
    )
    menu_item_66 = MenuItem(
        listingId = 18,
        name = "Maui Zaui with Ham",
        size = "Large",
        price = 34.99,
        description = "The Original Polynesian Pizza. Ham, crisp bacon, juicy pineapple, tomatoes, red & green onions on Polynesian sauce.",
        imageUrl = "https://ordering.roundtablepizza.com/Site/Images/Customers/RTP_thumbnails_pizza_maui_zaui.jpg"
    )

    roundtable_items = [menu_item_61, menu_item_62, menu_item_63, menu_item_64, menu_item_65, menu_item_66]
    add_roundtable_items = [db.session.add(roundtable_item) for roundtable_item in roundtable_items]
    db.session.commit()

    # Restaurant 19 (Pizza Hut)
    menu_item_67 = MenuItem(
        listingId = 19,
        name = '14" Supreme Pizza',
        size = "Large",
        price = 27.11,
        description = "This loaded pizza is the perfect choice for family dinner or a lunch with your crew. Includes pepperoni, seasoned pork, beef, mushrooms, green bell peppers and onions.",
        imageUrl = "https://pbs.twimg.com/media/DZ4qKgKX0AEUf28.jpg"
    )
    menu_item_68 = MenuItem(
        listingId = 19,
        name = '14" Pepperoni Lover\'s Pizza',
        size = "Large",
        price = 27.11,
        description = "The classic 1-topping pepperoni pizza you crave, loaded up with 50% more pepperoni.",
        imageUrl = "https://www.pizzahut.com/c/assets/img/pepperoni-pizza_875x300.jpg"
    )
    menu_item_69 = MenuItem(
        listingId = 19,
        name = "The Big New Yorker",
        price = 17.99,
        description = 'An iconic 16" New York-inspired pizza with 6 XL, foldable slices. Sweet marinara, classic and crispy cupped pepperoni, and parmesan oregano seasoning.',
        imageUrl = "https://www.tasteofhome.com/wp-content/uploads/2023/01/The-Big-New-Yorker-Courtesy-Pizza-Hut-DH-TOH-Resize.jpg"
    )
    menu_item_70 = MenuItem(
        listingId = 19,
        name = "Meat Lovers",
        price = 8.39,
        description = "A Melt loaded with pepperoni, ham, Italian sausage, beef, bacon and cheese. Served with marinara for dipping. Comes with one dipping sauce; no substitutions.",
        imageUrl = "https://assets3.thrillist.com/v1/image/3114993/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70"
    )
    menu_item_71 = MenuItem(
        listingId = 19,
        name = "Oven-Baked Cheesy Alfredo Pasta",
        price = 13.19,
        description = "A cheese lover's dream featuring our new creamy Alfredo sauce, cheese, shredded Parmesan, and Parmesan-oregano seasoning. Includes 5 breadsticks.",
        imageUrl = "https://assets3.thrillist.com/v1/image/3097712/1454x970/crop;webp=auto;jpeg_quality=60.jpg"
    )
    menu_item_72 = MenuItem(
        listingId = 19,
        name = "2 Liter Pepsi",
        price = 4.79,
        description = "2 Liter Pepsi",
        imageUrl = "https://api.pizzahut.io/v1/content/en-ca/ca-1/images/drink/drink.pepsi.b71560da143bf3da099dcc1d9017ef01.1.jpg"
    )

    pizzahut_items = [menu_item_67, menu_item_68, menu_item_69, menu_item_70, menu_item_71, menu_item_72]
    add_pizzahut_items = [db.session.add(pizzahut_item) for pizzahut_item in pizzahut_items]
    db.session.commit()

  # Restaurant #20 (Panera)
    menu_item_85 = MenuItem(
        listingId = 20,
        name = "Smokehouse BBQ Chicken Sandwich",
        price = 9.59,
        calories = 760,
        description = "Whole (760 Cal.), Half (380 Cal.) Smoked, pulled chicken raised without antibiotics, BBQ sauce, red onions, aged white cheddar, and frizzled onions on Classic White Miche. Allergens: Contains Wheat, Milk",
        imageUrl = "https://www.panerabread.com/content/dam/panerabread/menu-omni/integrated-web/grid/rect/smokehouse-bbq-sandwich-whole.jpg.transform/rect-grid-image/image.20230923.jpg"
    )
    menu_item_86 = MenuItem(
        listingId = 20,
        name = "The Spicy Take Chicken Sandwich",
        price = 17.19,
        calories = 570,
        description = "570 Cal. Seasoned and seared chicken raised without antibiotics, spicy Buffalo sauce, crispy pickle chips, and garlic aioli on a brioche roll. Allergens: Contains Wheat, Milk, Egg. May contain Sesame",
        imageUrl = "https://www.panerabread.com/content/dam/panerabread/menu-omni/integrated-web/grid/rect/buffalo-bird-sandwich-whole.jpg.transform/rect-grid-image/image.20230923.jpg"
    )
    menu_item_87 = MenuItem(
        listingId = 20,
        name = "Mac & Cheese",
        size = "Bread Bowl",
        price = 9.79,
        calories = 1150,
        description = "Bread Bowl (1150 Cal.), Small (480 Cal.), Large (960 Cal.), Group (1930 Cal.) Tender shell pasta in a blend of rich cheeses including our tangy aged white cheddar cheese sauce. Allergens: Contains Wheat, Milk, Egg",
        imageUrl = "https://www.panerabread.com/content/dam/panerabread/menu-omni/integrated-web/grid/rect/mac-and-cheese-breadbowl.jpg.transform/rect-grid-image/image.20230923.jpg"
    )
    menu_item_88 = MenuItem(
        listingId = 20,
        name = "Broccoli Cheddar Mac & Cheese",
        size = "Bread Bowl",
        price = 12.29,
        calories = 1040,
        description = "Bread Bowl (1040 Cal.), Small (370 Cal.), Large (740 Cal.), Group (1480 Cal.) Shell pasta in a blend of creamy cheese sauce and tangy white cheddar, simmered with seasoned broccoli and carrots. Allergens: Contains Wheat, Milk, Egg",
        imageUrl = "https://www.panerabread.com/content/dam/panerabread/menu-omni/integrated-web/grid/rect/broccoli-cheddar-mac-and-cheese-breadbowl.jpg.transform/rect-grid-image/image.20230923.jpg"
    )
    menu_item_89 = MenuItem(
        listingId = 20,
        name = "Chipotle Chicken & Bacon Flatbread Pizza",
        price = 14.79,
        calories = 1030,
        description = "1030 Cal. Smoked, pulled chicken raised without antibiotics, chopped Applewood-smoked bacon, vine ripened tomatoes and our fontina and mozzarella blend with garlic cream sauce on our flatbread. Allergens: Contains Wheat, Milk, Egg",
        imageUrl = "https://www.panerabread.com/content/dam/panerabread/menu-omni/integrated-web/grid/rect/chipotle-chicken-and-bacon-flatbread-sandwich.jpg.transform/rect-grid-image/image.20230923.jpg"
    )
    menu_item_90 = MenuItem(
        listingId = 20,
        name = "Classic Grilled Cheese Sandwich & Creamy Tomato Soup",
        price = 11.09,
        calories = 680,
        description = "A half portion of our Classic Grilled Cheese Sandwich served with a cup of Creamy Tomato Soup.",
        imageUrl = "https://www.panerabread.com/content/dam/panerabread/menu-omni/integrated-web/grid/rect/grilled-cheese-and-tomato-soup-duet.jpg.transform/rect-grid-image/image.20230923.jpg"
    )

    panera_items = [menu_item_85, menu_item_86, menu_item_87, menu_item_88, menu_item_89, menu_item_90]
    add_panera_items = [db.session.add(panera_item) for panera_item in panera_items]
    db.session.commit()


def undo_menu_items():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.menu_items RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM menu_items"))

    db.session.commit()
