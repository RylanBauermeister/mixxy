class Api::V1::DrinksController < ApplicationController
  skip_before_action :authorized

  def searchByName
    Drink.addByName(params[:searchTerm])
    filteredDrinks = Drink.where("lower(name) like ?", "%#{params[:searchTerm]}%")
    render json: filteredDrinks.map{|drink| DrinkSerializer.new(drink)}
  end

  def searchByIngredient
    filteredDrinks = Drink.searchByIngredient(params[:searchTerm])
    render json: filteredDrinks.map{|drink| DrinkSerializer.new(drink)}
  end
end
