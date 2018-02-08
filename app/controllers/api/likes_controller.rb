class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    if params[:story_id]
      @item = Story.find_by(id: params[:story_id])
    elsif params[:recipe_id]
      @item = Recipe.find_by(id: params[:recipe_id])
    else
      @item = Comment.find_by(id: params[:comment_id])
    end

    if @like.update_attribute(:likeable, @item) #if it will update likeable-
      render json: Like.all.last.id, status: 200
    else
      render json: {}, status: 401
    end
  end

  def destroy
    @like = Like.find_by_id(params[:id])
    @like.destroy!
    render json: {} #YOU HAVE TO RETURN {}!!!
  end

  private

  def like_params
    params.require(:like).permit(:author_id)
  end
end
