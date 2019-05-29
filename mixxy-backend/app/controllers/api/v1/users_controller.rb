class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: ['create']

  def create
    @user = User.create(user_params)
    if @user.valid?
      jwt = encode_token(user_id: @user.id)
      render json: { user: UserSerializer.new(@user), jwt: jwt }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  def update
    current_user.update(user_params)
    render json: {user: UserSerializer.new(current_user)}, status: :ok
  end

  def destroy
    current_user.delete
  end

  def shelf
    @user = User.find(params[:id])
    render json: { drinks: @user.drinks }, status: :ok
  end

  def addDrink
    @user = current_user
    @drink = Drink.find(user_drink_params[:drink_id])
    if @user && @drink
      UserDrink.create(user: @user, drink: @drink)
      render json: { user: UserSerializer.new(@user)}, status: :accepted
    else
      render json: { error: 'Invalid drink id.'}, status: :not_acceptable
    end
  end

  def removeDrink
    @user = current_user
    @drink = Drink.find(params[:id])
    if @user && @drink
      UserDrink.find_by(user: @user, drink: @drink).delete
      render json: { user: UserSerializer.new(@user)}, status: :accepted
    else
      render json: { error: 'Invalid drink id.'}, status: :not_acceptable
    end
  end

  def profile
    render json: { user: UserSerializer.new(current_user)}, include: '**', status: :accepted
  end


  private
  def user_params
    params.require(:user).permit(:username, :password)
  end

  def user_drink_params
    params.permit(:user_id, :drink_id)
  end
end
