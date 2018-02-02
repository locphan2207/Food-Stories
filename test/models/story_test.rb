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

require 'test_helper'

class StoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
