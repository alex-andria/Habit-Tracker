class AddGoalTrackerToHabit < ActiveRecord::Migration[6.1]
  def change
    add_column :habits, :goal_tracker, :integer
  end
end
