json.extract! current_user, :id, :username, :email
json.pic_url asset_url(current_user.pic_url)
