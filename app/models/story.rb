class Story < ApplicationRecord
  validates :title, :sub_title, :author_id, :img_url, presence: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  has_many :comments,
  as: :commentable,
  dependent: :destroy

  has_many :likes,
  as: :likeable,
  dependent: :destroy
end
