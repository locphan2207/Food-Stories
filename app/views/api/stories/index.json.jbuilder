@stories.each do |story|
  json.set! "#{story.id}" do
    json.extract! story, :id, :title, :sub_title, :img_url
  end
end
