class AddTableLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :likeable_id, null: false
      t.string :likeable_type, null: false
      t.integer :author_id, null: false
      t.timestamps
    end

    add_index :likes, [:author_id, :likeable_type, :likeable_id], unique: true
  end
end
