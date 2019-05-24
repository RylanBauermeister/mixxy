class Drink < ApplicationRecord
  has_many :userDrinks
  has_many :users, through: :userDrinks
  has_many :drinkIngredients
  has_many :ingredients, through: :drinkIngredients

  def self.search(term)
    HTTParty.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=#{term}")
  end


end
