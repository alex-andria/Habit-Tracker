class HabitSerializer < ActiveModel::Serializer
  attributes :id, :habit_name, :goal_description, :goal_days, :color_code, :user_id
end
