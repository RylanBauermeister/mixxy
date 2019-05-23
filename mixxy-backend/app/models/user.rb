class User < ApplicationRecord
  has_many :userDrinks
  has_many :drinks, through: :userDrinks
  has_secure_password
end
