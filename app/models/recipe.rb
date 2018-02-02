# == Schema Information
#
# Table name: recipes
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  author_id       :integer          not null
#  img_url         :string           not null
#  rating          :integer
#  difficulty      :string           not null
#  preparation_min :integer
#  baking_min      :integer
#  resting_min     :integer
#  ingredients     :string           not null
#  text            :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Recipe < ApplicationRecord
  validates :title, :author_id, :img_url, :difficulty, :ingredients, :text, presence: true
  validates :difficulty, inclusion: {in: %w(easy medium hard)}
  before_validation :ensure_cooking_duration

  private

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  def ensure_cooking_duration
    self.preparation_min ||= 0;
    self.baking_min ||= 0;
    self.resting_min ||= 0;
  end
end
