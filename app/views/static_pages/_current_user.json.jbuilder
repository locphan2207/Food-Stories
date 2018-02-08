# liked_recipes = current_user.liked_recipes
# liked_recipe_ids = liked_recipes.map {|recipe| recipe.id}
#
# liked_stories = current_user.liked_stories
# liked_story_ids = liked_stories.map {|story| story.id}

json.extract! current_user, :id, :username, :email
json.pic_url asset_url(current_user.pic_url)
# json.likedRecipeIds liked_recipe_ids
# json.likedStoryIds liked_story_ids
