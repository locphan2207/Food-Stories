@stories.each do |story|
  json.set! "#{story.id}" do
    json.extract! story, :id, :title, :img_url
  end
end
