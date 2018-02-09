class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
    render :index, status: 200
  end

  def show
    @recipe = Recipe.includes(:likes, :steps, comments: [:author, :likes]).find_by_id(params[:id])

    @comment_ids = []
    @recipe.comments.each do |comment|
      @comment_ids << comment.id
    end

    @like_ids = []
    @recipe.likes.each do |like|
      @like_ids << like.id
    end

    @step_ids = []
    @recipe.steps.each do |step|
      @step_ids << step.id
    end

    @errors = []
    render :show
  end

  def create
    @recipe = Recipe.new(recipe_params)
    @like_ids = []
    @errors = []
    if @recipe.save
      @recipe = Recipe.last
      render :show
    else
      @errors += @recipe.errors.full_messages
      render :show, status: 401
    end
  end

  def update
    @recipe = Recipe.find_by_id(params[:id])
    @errors = []
    if @recipe && @recipe.update(recipe_params)
      @comment_ids = []
      @recipe.comments.each do |comment|
        @comment_ids << comment.id
      end

      @like_ids = []
      @recipe.likes.each do |like|
        @like_ids << like.id
      end

      @step_ids = []
      @recipe.steps.each do |step|
        @step_ids << step.id
      end
      render :show
    else
      @errors += @recipe.errors.full_messages
      render :show, status: 401
    end
  end

  def search
    recipes = Recipe.search_by_filter(recipe_search_params)
    puts recipe_search_params
    # debugger
    # return back to front end with search result IDs here:
    @search_result = []; #for jbuilder
    recipes.each do |recipe|
      @search_result << recipe.id
    end
    p @search_result
    render :search_result
  end

  def search_by_ids
    @recipes = current_user.liked_recipes
    render :index, status: 200  #it returns liked recipes
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :author_id, :img_url, :difficulty,
      :preparation_min, :baking_min, :resting_min, :ingredients)
  end

  def recipe_search_params
    params.permit(:title, :difficulty, :maxCookingTime)
  end
end
