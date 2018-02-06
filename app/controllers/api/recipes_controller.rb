class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
    render :index, status: 200
  end

  def show
    @recipe = Recipe.includes(:comments).find_by_id(params[:id])
    @comment_ids = []
    @recipe.comments.each {|comment| @comment_ids << comment.id}
    @errors = []
    render :show
  end

  def create
    @recipe = Recipe.new(recipe_params)
    @errors = []
    if @recipe.save
      render :show
    else
      @errors += @recipe.errors.full_messages
      render :show
    end
  end

  def search
    recipes = Recipe.search_by_filter(recipe_search_params)
    puts recipe_search_params
    # return back to front end with search result IDs here:
    @search_result = []; #for jbuilder
    recipes.each do |recipe|
      @search_result << recipe.id
    end
    p @search_result
    render :search_result, status: 200
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :author_id, :img_url, :rating, :difficulty,
      :preparation_min, :baking_min, :resting_min, :ingredients, :text)
  end

  def recipe_search_params
    params.permit(:title, :difficulty, :maxCookingTime)
  end
end
