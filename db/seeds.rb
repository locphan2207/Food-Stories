# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: 'loc', email: 'loc@gmail.com', password: 'chetcha')
User.create(username: 'beautiful_guest', email: 'guest@gmail.com', password: 'secret')
User.create(username: 'master_admin', email: 'admin@gmail.com', password: 'secret')

img_url = [
  "https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/62097/pexels-photo-62097.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/76093/pexels-photo-76093.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/710916/pexels-photo-710916.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/247685/pexels-photo-247685.png?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/5506/bread-food-salad-sandwich.jpg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/72160/bbq-dinner-grilled-grill-72160.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/53121/kimchi-fried-rice-fried-rice-rice-korean-53121.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",

  "https://images.pexels.com/photos/7782/food-plate-wood-restaurant.jpg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/5928/salad-healthy-diet-spinach.jpg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/7765/food.jpg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/76784/pexels-photo-76784.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/36768/food-salmon-teriyaki-cooking.jpg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/262897/pexels-photo-262897.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/8758/food-dinner-lemon-rice.jpg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
]

# Recipe test seeds:
difficulty = ["easy", "medium", "hard"]
ingredients = "hamburger: 1 piece, salad: 3 piece, salt: 3 lbs, garlic: 2 glove, soy sauce: 100 ml, suger: 50 g, Swiss cheese: 40g, spring onions: 2, dill pickles: 2, smoked ham: 3, pulled pork shoulder: 150g, garlic: 1 clove, toast: 2 slices, butter: 1 tbsp, cheese: 4 tbsp, spinach: 25g"
ingredients = ingredients.split(", ")

(1..20).each do |i|
  Recipe.create(
    title: "Testing Recipe #{i} with testing author #{i}",
    author_id: "1",
    img_url: img_url[i-1],
    difficulty: difficulty[rand(2)],
    ingredients: ingredients.shuffle[0..5].join(", "),
    baking_min: 10 + rand(30),
    preparation_min: 10 + rand(30),
    resting_min: rand(15),
    text: "Step 1/7
      Lorem ipsum dolor sit amet, mauris nunc lacus, wisi ipsum convallis odio fusce pellentesque, sed lobortis, maecenas sed auctor. Ornare nihil cras ipsum ultrices metus amet. Venenatis velit, ipsum augue, sed in integer, magnis lectus in ante orci eget, montes eu urna mauris. Sit magnis at molestie at egestas donec, sem maecenas pede sollicitudin bibendum porta sed, facilisis commodo et. Vestibulum maecenas leo nunc mi ac, donec sollicitudin pellentesque sodales, consectetuer fusce nec phasellus, praesent ac magna, sed quisque risus porttitor pede imperdiet est. Maecenas malesuada consectetuer velit dolor aliquam et, platea erat turpis, vitae quis, justo sem donec rhoncus maecenas facilisis. Nunc mattis perferendis, eleifend sed ut netus mi consequat, ante pellentesque egestas arcu.
      Step2/7
      Lorem ipsum dolor sit amet, mauris nunc lacus, wisi ipsum convallis odio fusce pellentesque, sed lobortis, maecenas sed auctor. Ornare nihil cras ipsum ultrices metus amet. Venenatis velit, ipsum augue, sed in integer, magnis lectus in ante orci eget, montes eu urna mauris. Sit magnis at molestie at egestas donec, sem maecenas pede sollicitudin bibendum porta sed, facilisis commodo et. Vestibulum maecenas leo nunc mi ac, donec sollicitudin pellentesque sodales, consectetuer fusce nec       Neque non nec nullam tincidunt, habitant diam id feugiat lacus. Hendrerit est potenti eros aliquam mauris, non vel curabitur venenatis, pulvinar hendrerit, quis eu dolor tincidunt, vel vel vestibulum diam libero nisl. Etiam nibh nulla ipsum venenatis elementum vehicula, consequat in velit pede dolor, arcu lacinia, et tincidunt arcu, imperdiet suscipit pharetra eu nibh et. Faucibus mi et libero tellus convallis lectus. Nullam cursus, in nulla augue mauris, a adipiscing donec neque, pulvinar commodo. Integer amet orci pretium lorem eu nisl, a tortor metus purus sapien, lacus augue ut vitae exercitation. Vestibulum nunc pede, nonummy fusce, id adipiscing maecenas praesent vel, lacus proin. Mauris commodo consectetuer.
      Step 3/7
      Lorem ipsum dolor sit amet, mauris nunc lacus, wisi ipsum convallis odio fusce pellentesque, sed lobortis, maecenas sed auctor. Ornare nihil cras ipsum ultrices metus amet. Venenatis velit, ipsum augue, sed in integer, magnis lectus in ante orci eget, montes eu urna mauris. Sit magnis at molestie at egestas donec, sem maecenas pede sollicitudin bibendum porta sed, facilisis commodo et. Vestibulum maecenas leo nunc mi ac, donec sollicitudin pellentesque sodales, consectetuer fusce nec phase non nec nullam tincidunt, habitant diam id feugiat lacus. Hendrerit est potenti eros aliquam mauris, non vel curabitur venenatis, pulvinar hendrerit, quis eu dolor tincidunt, vel vel vestibulum diam libero nisl. Etiam nibh nulla ipsum venenatis elementum vehicula, consequat in velit pede dolor, arcu lacinia, et tincidunt arcu, imperdiet suscipit pharetra eu nibh et. Faucibus mi et libero tellus convallis lectus. Nullam cursus, in nulla augue mauris, a adipiscing donec neque, pulvinar commodo. Integer amet orci pretium lorem eu nisl, a tortor metus purus sapien, lacus augue ut vitae exercitation. Vestibulum nunc pede, nonummy fusce, id adipiscing maecenas praesent vel, lacus proin. Mauris commodo consectetuer.
      Step 4/7
      Lorem ipsum dolor sit amet, mauris nunc lacus, wisi ipsum convallis odio fusce pellentesque, sed lobortis, maecenas sed auctor. Ornare nihil cras ipsum ultrices metus amet. Venenatis velit, ipsum augue, sed in integer, magnis lectus in ante orci eget, montes eu urna mauris. Sit magnis at molestie at egestas donec, sem maecenas pede sollicitudin bibendum porta sed, facilisis commodo et. Vestibulum maecenas leo nunc mi ac, donec sollicitudin pellentesque sodales, consectetuer fusce nec phasellus, praesent ac magna, sed quisque risus porttitor pede imperdiet est. Maecenas malesuada consectetuer velit dolor aliquam et, platea erat turpis, vitae quis, justo sem donec rhoncus maecenas facilisis. Nunc mattis perferendis, eleifend sed ut netus mi consequat, ante pellentesque egestas arcu.
       amet orci pretium lorem eu nisl, a tortor metus purus sapien, lacus augue ut vitae exercitation. Vestibulum nunc pede, nonummy fusce, id adipiscing maecenas praesent vel, lacus proin. Mauris commodo consectetuer.
      Step 5/7
      Lorem ipsum dolor sit amet, mauris nunc lacus, wisi ipsum convallis odio fusce pellentesque, sed lobortis, maecenas sed auctor. Ornare nihil cras ipsum ultrices metus amet. Venenatis velit, ipsum augue, sed in integer, magnis lectus in ante orci eget, montes eu urna mauris. Sit magnis at molestie at egestas donec, sem maecenas pede sollicitudin bibendum porta sed, facilisis commodo et. Vestibulum maecenas leo nunc mi ac, donec sollicitudin pellentesque sodales, consectetuer fusce nec phas bibendum orci lectus convallis, duis ipsum sit ac alias vestibulum risus. Dapibus nisi erat vel, penatibus euismod metus consectetuer est, orci sit placerat volutpat id, ante sit molestias nulla magnis eleifend vel. Magna neque orci arcu lacus augue, ultrices nec praesent, auctor maecenas aliquam lectus quisque sed. Duis pede.
      pretium lorem eu nisl, a tortor metus purus sapien, lacus augue ut vitae exercitation. Vestibulum nunc pede, nonummy fusce, id adipiscing maecenas praesent vel, lacus proin. Mauris commodo consectetuer.
      Step 6/7
      Lorem ipsum dolor sit amet, mauris nunc lacus, wisi ipsum convallis odio fusce pellentesque, sed lobortis, maecenas sed auctor. Ornare nihil cras ipsum ultrices metus amet. Venenatis velit, ipsum augue, sed in integer, magnis lectus in ante orci eget, montes eu urna mauris. Sit magnis at molestie at egestas donec, sem maecenas pede sollicitudin bibendum porta sed, facilisis commodo et. Vestibulum maecenas leo nunc mi ac, donec sollicitudin pellentesque sodales, consectetuer fusce nec nteger amet orci pretium lorem eu nisl, a tortor metus purus sapien, lacus augue ut vitae exercitation. Vestibulum nunc pede, nonummy fusce, id adipiscing maecenas praesent vel, lacus proin. Mauris commodo consectetuer.
      Step7/7
      Lorem ipsum dolor sit amet, mauris nunc lacus, wisi ipsum convallis odio fusce pellentesque, sed lobortis, maecenas sed auctor. Ornare nihil cras ipsum ultrices metus amet. Venenatis velit, ipsum augue, sed in integer, magnis lectus in ante orci eget, montes eu urna mauris. Sit magnis at molestie at egestas donec, sem maecenas pede sollicitudin bibendum porta sed, facilisis commodo et. Vestibulum maecenas leo nunc mi ac, donec sollicitudin pellentesque sodales, consectetuer fusce nec etium lorem eu nisl, a tortor metus purus sapien, lacus augue ut vitae exercitation. Vestibulum nunc pede, nonummy fusce, id adipiscing maecenas praesent vel, lacus proin. Mauris commodo consectetuer.Enjoy!"
  )
end

#Story test seeds:
(1..20).each do |i|
  Story.create(
    title: "When you don't know what to put here #{i}",
    sub_title: "You start typing whatever #TanLoc",
    author_id: "2",
    img_url: img_url[(20-i)%15],
    text: "Lorem ipsum dolor sit amet, mauris nunc lacus, wisi ipsum convallis odio fusce pellentesque, sed lobortis, maecenas sed auctor. Ornare nihil cras ipsum ultrices metus amet. Venenatis velit, ipsum augue, sed in integer, magnis lectus in ante orci eget, montes eu urna mauris. Sit magnis at molestie at egestas donec, sem maecenas pede sollicitudin bibendum porta sed, facilisis commodo et. Vestibulum maecenas leo nunc mi ac, donec sollicitudin pellentesque sodales, consectetuer fusce     necphasellus, praesent ac magna, sed quisque risus porttitor pede imperdiet est. Maecenas malesuada consectetuer velit dolor aliquam et, platea erat turpis, vitae quis, justo sem donec rhoncus maecenas facilisis. Nunc mattis perferendis, eleifend sed ut netus mi consequat, ante pellentesque egestas arcu.
      Nibh aliquet in ultrices, tellus at non tellus a aliquam, fames vestibulum dapibus curabitur vestibulum, pede integer porttitor ut donec. Praesent quis nullam odio mi vel nullam. Dui suscipit metus consectetuer mauris dignissim praesent, suspendisse aenean mauris, eu commodo metus cras elementum, at duis ut, id eget dolor ut pede. Asperiores facilisis risus eu, et pede tempus a, etiam gravida dui justo urna tenetur et, vehicula rutrum tincidunt. Vel gravida dolor accusamus magnis non, curabitur imperdiet metus tempus turpis nulla vitae. Metus cursus eget egestas semper ut mauris, eros sit, dapibus malesuada tincidunt tellus ridiculus feugiat pellentesque, aliquam diam et arcu dignissim. Vehicula vitae phasellus, fringilla id fugiat mi non ante elit, nec ligula pharetra mauris ac, auctor vel nullam magna, augue at nisl sociosqu. Wisi ac aliquam nulla sed faucibus laoreet, viverra phasellus augue, non bibendum. Eget vehicula semper vestibulum ligula. Faucibus elit a pede non viverra. Quam nulla nec ultrices in, suscipit donec et ipsum, platea elementum, urna pellentesque.
      Nulla sed ut ac. Nonummy wisi nam elementum tortor, tincidunt volutpat nibh erat porta, imperdiet amet id vestibulum, eleifend ac, facilisis lorem porta. Dolor a eu vehicula dolor neque, tortor luctus qui nec sem, nisl erat. Ipsum arcu risus amet odio libero at, ornare pellentesque et, sed fermentum interdum malesuada justo etiam id, at accumsan. Quis justo iaculis sed sodales odio, cras vel morbi, aenean vitae vitae integer phasellus egestas, luctus a. Dolor nam sem at tellus. Pretium eros bibendum orci lectus convallis, duis ipsum sit ac alias vestibulum risus. Dapibus nisi erat vel, penatibus euismod metus consectetuer est, orci sit placerat volutpat id, ante sit molestias nulla magnis eleifend vel. Magna neque orci arcu lacus augue, ultrices nec praesent, auctor maecenas aliquam lectus quisque sed. Duis pede.
      Neque non nec nullam tincidunt, habitant diam id feugiat lacus. Hendrerit est potenti eros aliquam mauris, non vel curabitur venenatis, pulvinar hendrerit, quis eu dolor tincidunt, vel vel vestibulum diam libero nisl. Etiam nibh nulla ipsum venenatis elementum vehicula, consequat in velit pede dolor, arcu lacinia, et tincidunt arcu, imperdiet suscipit pharetra eu nibh et. Faucibus mi et libero tellus convallis lectus. Nullam cursus, in nulla augue mauris, a adipiscing donec neque, pulvinar commodo. Integer amet orci pretium lorem eu nisl, a tortor metus purus sapien, lacus augue ut vitae exercitation. Vestibulum nunc pede, nonummy fusce, id adipiscing maecenas praesent vel, lacus proin. Mauris commodo consectetuer."
  )
end

# Comment.new(author_id: 1, body: "This recipe is awesome!!!").update_attribute(:commentable, Recipe.all[0])
# Comment.new(author_id: 2, body: "You are right", parent_comment_id: 1).update_attribute(:commentable, Recipe.all[0])
# Comment.new(author_id: 3, body: "I am the admin", parent_comment_id: 1).update_attribute(:commentable, Recipe.all[0])
