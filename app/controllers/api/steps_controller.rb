class Api::StepsController < ApplicationController
  def create
    @step = Step.new(step_params)
    @errors = []

    if @step.save
      render :show, status: 200
    else
      @errors += @step.errors.full_messages
      render :show, status: 401
  end

  private

  def step_params
    params.require(:step).permit(:recipe_id, :body, :step_order, :image)
  end
end
