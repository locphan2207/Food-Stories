class Step < ApplicationRecord
  validates :body, :step_order, :recipe_id, presence: true

  #Paperclip defaults:
  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :recipe,
  primary_key: :id,
  foreign_key: :recipe_id,
  class_name: :Recipe
end
