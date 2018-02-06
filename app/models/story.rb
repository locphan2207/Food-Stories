# == Schema Information
#
# Table name: stories
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  img_url    :string           not null
#  text       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Story < ApplicationRecord
  validates :title, :sub_title, :author_id, :img_url, presence: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User,
  dependent: :destroy

  has_many :comments,
  as: :commentable
end
