class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :commentable_id, null: false
      t.string :commentable_type, null: false
      t.integer :author_id, null: false
      t.string :body, null: false
      t.integer :parent_comment_id
      t.string :img_url
      t.timestamps
    end

    add_index :comments, [:commentable_type, :commentable_id]
  end
end
