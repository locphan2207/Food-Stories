class Api::StoriesController < ApplicationController
  def index
    @stories = Story.all
    render :index, status: 200
  end

  def show
    @story = Story.find_by_id(params[:id])
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

  private

  def story_params
    params.require(:story).permit(:title, :author_id, :img_url, :text)
  end
end
