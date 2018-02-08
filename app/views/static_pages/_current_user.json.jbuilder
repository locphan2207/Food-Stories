liked_recipes = current_user.liked_recipes
liked_recipe_ids = liked_recipes.map {|recipe| recipe.id}

json.extract! current_user, :id, :username, :email
json.pic_url asset_url(current_user.pic_url)
json.likedRecipeIds liked_recipe_ids
