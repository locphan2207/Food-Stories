# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: 'loc', email: 'loc@gmail.com', password: 'chetcha')

(0..20).each do |i|
  Recipe.create(
    title: "Testing Recipe #{i} with testing author #{i}",
    author_id: "1",
    img_url: "http://static1.businessinsider.com/image/586d0877dd0895e1148b45f4/the-50-best-food-bloggers-to-follow-on-instagram-in-2017.jpg",
    difficulty: "easy",
    ingredients: "hamburger: 1 piece, salad: 3 piece, salt: 3 lbs, garlic: 2 glove, soy sauce: 100 ml, suger: 50 g",
    baking_min: 20 + rand(40),
    preparation_min: 10 + rand(50),
    resting_min: rand(30),
    text: "Step 1/5 Remove bones, skin, and sinews from beef, season evenly with salt, and allow to rest for 4 hrs.600 g beef shank50 g sea salt cutting boardknife Remove bones, skin, and sinews from beef, season evenly with salt, and allow to rest for 4 hrs.

Step 2/5
For the stock add 2/5 of the water, cardamom, star anise, bay leaves, chilis, cloves, coriander seeds, nutmeg, pepper, fennel seeds, lemon zest, rice wine, soy sauce, soybean paste, and sugar to a pot with lid over medium-high heat and bring to a boil. In the meantime, add beef to a large pot and top with remaining cold water and bring to a boil.

5 l water3 cardamom pods2 star anise2 bay leaves2 dried chili3 cloves½ tsp coriander seeds1 nutmeg1 tsp mixed pepper½ tsp fennel seeds150 ml dark rice wine7 tbsp light soy sauce100 ml soy sauce2 tbsp soybean paste50 g sugarlemon zest

potfine gratercooking spoonpot with lid
For the stock add 2/5 of the water, cardamom, star anise, bay leaves, chilis, cloves, coriander seeds, nutmeg, pepper, fennel seeds, lemon zest, rice wine, soy sauce, soybean paste, and sugar to a pot with lid over medium-high heat and bring to a boil. In the meantime, add beef to a large pot and top with remaining cold water and bring to a boil.
Step 3/5
Finley chop ginger and roughly chop leek. Transfer ginger, leek, and beef into the stock; if needed, add more water. Bring to a boil and simmer over medium-low heat for approx. 1.5 hrs. or until tender.  Allow to cool, then transfer to the fridge for approx. 12 hrs.50 g ginger3 leek
Finley chop ginger and roughly chop leek. Transfer ginger, leek, and beef into the stock; if needed, add more water. Bring to a boil and simmer over medium-low heat for approx. 1.5 hrs. or until tender. Allow to cool, then transfer to the fridge for approx. 12 hrs.
Step 4/5
For the sauce, finely slice garlic, add to a bowl, and mix with rice vinegar, sesame oil, remaining light soy sauce, and beef stock and season with salt and pepper. Stir to combine.
2 cloves garlic2 tsp rice vinegar1 tsp sesame oil1 tbsp light soy sauce2 tsp beef stock1 pinch salt1 pinch pepper
bowlwhisk
For the sauce, finely slice garlic, add to a bowl, and mix with rice vinegar, sesame oil, remaining light soy sauce, and beef stock and season with salt and pepper. Stir to combine.
Step 5/5
Cut cucumber into slices. Remove beef from pot, gently dry with a paper towel and cut into slices. Garnish with sauce, cucumber, chili, and fresh cilantro. Enjoy!
1 cucumberfresh cilantro for servingchili for serving
paper towel
Cut cucumber into slices. Remove beef from pot, gently dry with a paper towel and cut into slices. Garnish with sauce, cucumber, chili, and fresh cilantro. Enjoy!
    "
  )
end
