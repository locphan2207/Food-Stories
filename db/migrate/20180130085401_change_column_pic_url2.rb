class ChangeColumnPicUrl2 < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :pic_url
    add_column :users, :pic_url, :string
  end
end
