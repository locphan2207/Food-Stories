class CreateRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.string :img_url, null: false
      t.integer :rating
      t.string :difficulty, null: false
      t.integer :preparation_min
      t.integer :baking_min
      t.integer :resting_min
      t.string :ingredients, null: false
      t.text :text, null: false
      t.timestamps
    end

    add_index :recipes, :title
  end
end
