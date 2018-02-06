class Comment < ApplicationRecord
  validates :commentable_id, :commentable_type, :author_id, :body, presence: true

  belongs_to :commentable,
  polymorphic: true  #it will create join table

  has_many :replies,
  primary_key: :id,
  foreign_key: :parent_comment_id,
  class_name: :Comment

  belongs_to :parent_comment,
  primary_key: :id,
  foreign_key: :parent_comment_id,
  class_name: :Comment
end
