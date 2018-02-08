json.currentUser do
  if !current_user
    json.null!
  else
    json.extract! current_user, :id, :username, :email
    json.pic_url asset_url(current_user.pic_url)
    json.likedRecipeIds @liked_recipe_ids
  end
end

# json.likedRecipes do
#   @liked_recipes.each do |recipe|
#     json.set! "#{recipe.id}" do
#       json.extract! recipe, :id, :title, :img_url, :baking_min, :resting_min, :preparation_min
#     end
#   end
# end

json.errors @errors
