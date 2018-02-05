json.story do
  json.extract! @story, :id, :title, :sub_title, :author_id, :img_url, :text
end

json.errors @errors
