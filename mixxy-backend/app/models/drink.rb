class Drink < ApplicationRecord
  has_many :userDrinks
  has_many :users, through: :userDrinks
  has_many :drinkIngredients
  has_many :ingredients, through: :drinkIngredients

  def self.addByName(term)
    response = HTTParty.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=#{term}")
    data = JSON.parse(response.to_s)
    Drink.addDrinks(data)
  end

  def self.addDrinks(data)
    return if !data['drinks']
    data['drinks'].each do |drink|
      next if Drink.where('lower(name) like ?', "%#{drink['strDrink'].downcase}%").exists?
      newDrink = Drink.create({
          name: drink['strDrink'],
          category: drink['strCategory'],
          glass: drink["strGlass"],
          instructions: drink["strInstructions"],
          img_url: drink["strDrinkThumb"]
        })

      Ingredient.generateIngredientsForDrink(drink, newDrink)

    end
  end

  def self.searchByIngredient(ing)
    response = HTTParty.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=#{ing}").to_s
    data = response == '' ? {} : response
    data['drinks'].each do |drink|
      drinkResponse = HTTParty.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=#{drink['idDrink']}")
      drinkData = JSON.parse(drinkResponse.to_s)
      Drink.addDrinks(drinkData)
    end if !data.empty?

    Drink.all.select { |drink|
      !drink.ingredients.where("lower(name) like ?", "%#{ing}%").empty?
    }
  end


  def self.clear
    Drink.all.delete_all
  end

end
