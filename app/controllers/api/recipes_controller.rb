require 'byebug'
class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
    render :index
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

  private

  def recipe_params
    params.require(:recipe).permit(:title, :author_id, :img_url, :rating, :difficulty,
      :preparation_min, :baking_min, :resting_min, :ingredients, :text)
  end
end
