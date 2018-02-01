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
    ingredients: "hamburger: 1, salad: 1, carrot: 3",
    text: "Roughly chop pecans. Add sugar, water, and pecans to a pot. Allow the mixture to slowly simmer on medium heat for approx. 5 min. or until it thickens. Set aside and allow to cool.",
    baking_min: 20 + rand(40),
    preparation_min: 10 + rand(50),
    resting_min: rand(30)
  )
end
