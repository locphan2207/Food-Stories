@recipes.each do |recipe|
  json.set! "#{recipe.id}" do
    json.extract! recipe, :id, :title, :img_url, :baking_min, :resting_min, :preparation_min
  end
end
