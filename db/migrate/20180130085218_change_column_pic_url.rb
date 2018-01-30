class ChangeColumnPicUrl < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :pic_url, :string
  end
end
