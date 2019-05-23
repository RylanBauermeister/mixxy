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

  def profile
    render json: { user: UserSerializer.new(current_user)}, status: :accepted
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
