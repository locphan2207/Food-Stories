class CreateStories < ActiveRecord::Migration[5.1]
  def change
    create_table :stories do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.string :img_url, null: false
      t.text :text

      t.timestamps
    end
  end
end
