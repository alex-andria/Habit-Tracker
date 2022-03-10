# debbug2
class HabitsController < ApplicationController
    # skip_before_action :authorize

    def index
      render json: Habit.all
    end

    def show
      habit = Habit.find(params[:id])
      render json: habit
  end 
  
    def create
      habit = @current_user.habits.create!(habit_params)
      render json: habit, status: :created
    end
  
    private
  
    def habit_params
      params.permit(:habit_name, :goal_description, :goal_days, :user_id, :goal_tracker, :color_code)
    end
  
end

# debbug 1
# class HabitsController < ApplicationController
#     skip_before_action :authorize
#     # remove skip once authorization complete

#     def index
#         render json: Habit.all
#     end

#     def show
#         habit = find_habit
#         render json: habit
#     end

#     def create
#         # habit = Habit.create!(habit_params)
#         habit = @current_user.habits.create!(habit_params)
#         render json: habit, status: :created
#     end

#     def update
#         habit = find_habit
#         # habit.update!(habit_params)
#         habit = @current_user.habits.update!(habit_params)
#         render json: habit, status: :created
#     end

#     private

#     def find_habit
#         Habit.find(params[:id])
#     end

#     def habit_params
#         params.permit(:habit_name, :goal_description, :goal_days, :goal_tracker, :user_id, :color_code)
#     end

# end
