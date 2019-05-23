class Drink < ApplicationRecord
  has_many :userDrinks
  has_many :users, through: :userDrinks
  has_many :drinkIngredients
  has_many :ingredients, through: :drinkIngredients

end
