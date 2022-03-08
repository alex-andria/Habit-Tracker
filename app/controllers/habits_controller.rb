class HabitsController < ApplicationController
    def index
        render json: Habit.all
    end

    def show
        habit = find_habit
        render json: habit
    end

    def create
        habit = Habit.create!(habit_params)
        render json: habit, status: :created
    end

    def update
        habit = find_habit
        habit.update!(habit_params)
        render json: habit
    end

    private

    def find_habit
        Habit.find(params[:id])
    end

    def habit_params
        params.permit(:habit_name, :goal_description, :goal_days, :goal_tracker, :user_id, :color_code)
    end

end
