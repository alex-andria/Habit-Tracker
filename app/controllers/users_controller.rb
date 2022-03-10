
# debbug2

class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def index
      render json: User.all
    end 

    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end
  
    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end
  
    private
  
    def user_params
      params.permit(:name, :email, :password, :password_confirmation)
    end
  
end

# debbug 1
# class UsersController < ApplicationController
#     skip_before_action :authorize, only: :create

#     def index
#         render json: User.all
#     end

#     def create
#         user = User.create!(user_params)
#         session[:user_id] = user.id
#         render json: user, status: :created
#     end

#     def show
#         if current_user
#             render json: curent_user, status: ok
#         else
#             render json: "No current user set", status: :unauthorized
#         end
#     end

#     def update
#         user = current_user
#         user.update!(user_params)
#         render json: user
#     end

#     private

#     def find_user
#         User.find_by(id: session[:user_id])
#     end

#     def user_params
#         params.permit(:name, :email, :password, :password_confirmation)
#     end
# end
