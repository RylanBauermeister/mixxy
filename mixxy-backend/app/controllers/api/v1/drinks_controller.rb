class Api::V1::DrinksController < ApplicationController
  skip_before_action :authorized

  def searchByName
    render json: Drink.search(params[:searchTerm])
  end

end
