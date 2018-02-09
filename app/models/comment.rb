class Comment < ApplicationRecord
  validates :commentable_id, :commentable_type, :author_id, :body, presence: true
  before_validation :ensure_parent_comment_id

  #Paperclip defaults:
  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  belongs_to :commentable,
  polymorphic: true  #it will create join table

  has_many :replies,
  primary_key: :id,
  foreign_key: :parent_comment_id,
  class_name: :Comment,
  dependent: :destroy

  belongs_to :parent_comment,
  primary_key: :id,
  foreign_key: :parent_comment_id,
  class_name: :Comment,
  optional: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  has_many :likes,
  as: :likeable,
  dependent: :destroy

  private

  def ensure_parent_comment_id
    self.parent_comment_id ||= 0;
  end
end
