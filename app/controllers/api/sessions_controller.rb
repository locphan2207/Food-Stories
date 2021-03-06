class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email],
      params[:user][:password])

    # @liked_recipes = @user.liked_recipes
    # @liked_recipe_ids = @liked_recipes.map {|recipe| recipe.id}
    #
    # @liked_stories = @user.liked_stories
    # @liked_story_ids = @liked_stories.map {|story| story.id}

    @errors = []
    if @user
      session[:session_token] = @user.session_token
      render :show
    else
      @errors += ['Wrong username/password']
      render :show, status: 404
    end
  end

  def destroy
    @errors = []
    if current_user
      current_user.reset_session_token!
      session[:session_token] = nil
      render :show
    else
      @errors += ['You are not logged in']
      render :show, status: 401
    end
  end
end
