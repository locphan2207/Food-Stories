class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
    render :index, status: 200
  end

  def show
    @recipe = Recipe.find_by_id(params[:id])
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
    @recipes = Recipe.search_by_filter(recipe_params)
    # return back to front end with search result here:
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :author_id, :img_url, :rating, :difficulty,
      :preparation_min, :baking_min, :resting_min, :ingredients, :text)
  end

  def recipe_search_params
    params.require(:title, :difficulty, :maxCookingTime)
  end
end
