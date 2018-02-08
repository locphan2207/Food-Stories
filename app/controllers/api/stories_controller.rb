class Api::StoriesController < ApplicationController
  def index
    @stories = Story.all
    render :index, status: 200
  end

  def show
    @story = Story.includes(:likes, comments: [:author, :likes]).find_by_id(params[:id])

    @comment_ids = []
    @story.comments.each do |comment|
      @comment_ids << comment.id
    end

    @like_ids = []
    @story.likes.each do |like|
      @like_ids << like.id
    end

    @errors = []
    render :show
  end

  def create
    @story = Story.new(story_params)
    @errors = []
    if @story.save
      render :show
    else
      @errors += @story.errors.full_messages
      render :show
    end
  end

  def search_by_ids
    @stories = current_user.liked_stories
    render :index, status: 200  #it returns liked stories
  end

  private

  def story_params
    params.require(:story).permit(:title, :author_id, :img_url, :text)
  end
end
