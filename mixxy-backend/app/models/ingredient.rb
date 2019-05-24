class Ingredient < ApplicationRecord
  has_many :drinkIngredients
  has_many :drinks, through: :drinkIngredients

  def self.clear
    Ingredient.all.delete_all
  end

  def self.generateIngredientsForDrink(data, drink)

    i = 1
    while data["strIngredient#{i}"] && data["strIngredient#{i}"] != "" do

      ingredient = Ingredient.find_by(name: data["strIngredient#{i}"])

      if !ingredient
        ingredient = Ingredient.create({
          name: data["strIngredient#{i}"],
          amount: data["strMeasure#{i}"],
        })
      end

      DrinkIngredient.create({
        ingredient: ingredient,
        drink: drink
      })

      i += 1
    end
  end

end
