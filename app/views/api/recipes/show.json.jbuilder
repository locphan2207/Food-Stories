json.recipe do
  json.extract! @recipe, :id, :title, :author_id, :img_url, :rating, :difficulty,
    :preparation_min, :baking_min, :resting_min, :ingredients, :text
end

json.errors @errors
