json.currentUser do
  if !current_user
    json.null!
  else
    json.extract! current_user, :id, :username, :pic_url
  end
end

json.errors @errors
