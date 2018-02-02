json.story do
  json.extract! @story, :id, :title, :author_id, :img_url, :text
end

json.errors @errors
