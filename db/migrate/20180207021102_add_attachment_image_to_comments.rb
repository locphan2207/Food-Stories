class AddAttachmentImageToComments < ActiveRecord::Migration[5.1]
  def self.up
    change_table :comments do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :comments, :image
  end
end
