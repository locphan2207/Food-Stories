# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  pic_url         :string
#

class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  before_validation :ensure_session_token

  has_many :recipes,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Recipe

  has_many :stories,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Story

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && BCrypt::Password.new(user.password_digest)
      .is_password?(password)
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end


  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end
