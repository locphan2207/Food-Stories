class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @errors = []
    if @user.save
      session[:session_token] = User.last.session_token
      render :show
    else
      @errors += @user.errors.full_messages
      render :show, status: 401
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
