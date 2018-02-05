class AddColumnSubTitleToStory < ActiveRecord::Migration[5.1]
  def change
    add_column :stories, :sub_title, :string, null: false
  end
end
