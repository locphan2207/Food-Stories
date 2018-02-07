json.currentUser do
  if !current_user
    json.null!
  else
    json.extract! current_user, :id, :username, :email
    json.pic_url asset_url(current_user.pic_url)
  end
end

json.errors @errors
