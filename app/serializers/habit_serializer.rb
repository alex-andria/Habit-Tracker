class HabitSerializer < ActiveModel::Serializer
  attributes :id, :habit_name, :goal_description, :goal_days, :user_id, :goal_tracker, :color_code

end
