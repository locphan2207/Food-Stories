json.recipe do
  json.extract! @recipe, :id, :title, :author_id, :img_url, :rating, :difficulty,
    :preparation_min, :baking_min, :resting_min, :ingredients, :text
  json.commentIds @comment_ids
end

json.comments do
  @recipe.comments.each do |comment|
    json.set! "#{comment.id}" do
      json.extract! comment, :id, :author_id, :body, :parent_comment_id
      json.img_url comment.image.url  #paperclip stuff
    end
  end
end

json.users do
  @recipe.comments.each do |comment|
    json.set! "#{comment.author.id}" do
      json.extract! comment.author, :id, :username
      json.pic_url asset_url(comment.author.pic_url)
    end
  end
end

json.errors @errors
