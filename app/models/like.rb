class Like < ApplicationRecord
  validates :likeable_id, :likeable_type, :author_id, presence: true
  validates :author_id, uniqueness: {scope: [:likeable_type, :likeable_id]}

  belongs_to :likeable,
  polymorphic: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User
end
