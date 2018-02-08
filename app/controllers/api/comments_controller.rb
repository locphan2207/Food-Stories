class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if (params[:story_id])
      @item = Story.find_by(id: params[:story_id])
    else
      @item = Recipe.find_by(id: params[:recipe_id])
    end

    if @comment.update_attribute(:commentable, @item) #it will update commentable-
      render json: Comment.all.last.id, status: 200
    else
      render json: {}, status: 401
    end
  end

  def destroy
    @comment = Comment.find_by_id(params[:id])
    if @comment.destroy
      render json: {}
    else
      render json: {error: "bad"}, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:author_id, :body, :image, :parent_comment_id)
  end
end
