class RemoveColumnImgUrlComments < ActiveRecord::Migration[5.1]
  def change
    remove_column :comments, :img_url
  end
end
