class HabitSerializer < ActiveModel::Serializer
  attributes :id, :habit_name, :goal_description, :goal_days
  has_one :user
end
