class Recipe < ApplicationRecord
  validates :title, :author_id, :img_url, :difficulty, :ingredients, :text, presence: true
  validates :difficulty, inclusion: {in: %w(easy medium hard)}
  
  before_validation :ensure_cooking_duration, :ensure_text

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


  def self.search_by_filter(searchQuery)
    #Find any recipe that has the title as query title:
    filter1 = searchQuery[:title] == "" ? "" :
      "title LIKE '%#{searchQuery[:title]}%'"
    #Find any recipe that has the difficulty as query difficulty:
    filter2 = searchQuery[:difficulty] == "" ? "" :
      "difficulty = '#{searchQuery[:difficulty]}'"
    #Find any recipe that has total time as query cookingTime
    filter3 = searchQuery[:maxCookingTime] == "" ? "" :
      "(preparation_min + baking_min + resting_min) < #{searchQuery[:maxCookingTime]}"
    #Now we put them all in one big string conditionally:
    full_condition = ""
    full_condition += filter1 + ' AND ' if (filter1 != "")
    full_condition += filter2 + ' AND ' if (filter2 != "")
    full_condition += filter3 + ' AND ' if (filter3 != "")
    full_condition = full_condition[0..-5]  #remove the last AND

    Recipe.where(full_condition)
  end

  def ensure_cooking_duration
    self.preparation_min ||= 0;
    self.baking_min ||= 0;
    self.resting_min ||= 0;
  end

  def ensure_text
    self.text ||= "No text yet"
  end
end
