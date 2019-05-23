class Ingredient < ApplicationRecord
  has_many :drinkIngredients
  has_many :drinks, through: :drinkIngredients  

end
