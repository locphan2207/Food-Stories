class AddColumnStepOrderSteps < ActiveRecord::Migration[5.1]
  def change
    add_column :steps, :step_order, :integer
  end
end
