class Recipe < ApplicationRecord
  validates :title, :author_id, :img_url, :difficulty, :ingredients, :text, presence: true
  validates :difficulty, inclusion: {in: %w(easy medium hard)}
  before_validation :ensure_cooking_duration

  private

  def ensure_cooking_duration
    self.preparation_min ||= 0;
    self.baking_min ||= 0;
    self.resting_min ||= 0;
  end
end
