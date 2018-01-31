json.currentUser do
  if !current_user
    json.null!
  else
    json.extract! current_user, :id, :username, :email, :pic_url
  end
end

json.errors @errors
