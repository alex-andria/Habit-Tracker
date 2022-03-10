class Habit < ApplicationRecord
  belongs_to :user

  validates :habit_name, presence: true, length: {maximum: 20}
  validates :goal_description, presence: true, length: {minimum: 5}
  validates :goal_days, presence: true, numericality: { only_integer: true }
  validates :color_code, presence: true
end
