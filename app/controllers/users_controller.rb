class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def show
        user = find_user
        render json: user, serializer: UserWithHabitsSerializer
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def update
        user = find_user
        user.update!(user_params)
        render json: user
    end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:name, :email, :password)
    end
end
