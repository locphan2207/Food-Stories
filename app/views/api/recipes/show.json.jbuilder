json.recipe do
  json.extract! @recipe, :id, :title, :author_id, :img_url, :rating, :difficulty,
    :preparation_min, :baking_min, :resting_min, :ingredients, :text
  json.commentIds @comment_ids
end

json.comments do
  @recipe.comments.each do |comment|
    json.set! "#{comment.id}" do
      json.extract! comment, :id, :author_id, :body, :img_url, :parent_comment_id
    end
  end
end

json.users do
  @recipe.comments.each do |comment|
    json.set! "#{comment.author.id}" do
      json.extract! comment.author, :id, :username, :pic_url
    end
  end
end

json.errors @errors
