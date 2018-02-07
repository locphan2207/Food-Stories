json.recipe do
  json.extract! @recipe, :id, :title, :author_id, :img_url, :rating, :difficulty,
    :preparation_min, :baking_min, :resting_min, :ingredients, :text
  json.commentIds @comment_ids
  json.likeIds @like_ids
end

json.comments do
  @recipe.comments.each do |comment|
    json.set! "#{comment.id}" do
      json.extract! comment, :id, :author_id, :body, :parent_comment_id
      json.img_url comment.image.url  #paperclip stuff
      comment_like_ids = []
      comment.likes.each do |like|
        comment_like_ids << like.id
      end
      json.likeIds comment_like_ids
    end
  end
end

json.likes do
  @recipe.likes.each do |like|
    json.set! "#{like.id}" do
      json.extract! like, :id, :author_id
    end
  end
  @recipe.comments.each do |comment|
    comment.likes.each do |like|
      json.set! "#{like.id}" do
        json.extract! like, :id, :author_id
      end
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
