json.step do
  json.set! "#{@step.id}" do
    json.extract! @step, :id, :body, :step_order
    json.img_url asset_url(@step.image.url)
  end
end

json.errors @errors
