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

require 'test_helper'

class RecipeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
