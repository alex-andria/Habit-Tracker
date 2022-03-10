# debbug2
class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]
  
    def create
      user = User.find_by(email: params[:email])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :ok
      else
        render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      end
    end
  
    def destroy
      session.delete :user_id
      head :no_content
    end
  
  end


# debbug 1
# class SessionsController < ApplicationController
#     skip_before_action :authorize, only: :login

#     def login
#         user = User.find_by(email:params[:email])
#         if user&.authenticate(params[:password])
#             session[:user_id] = user.id
#             # session[:login_attempts] = 0
#             render json: user, status: ok
#             # , serializer: UserWithHabitsSerializer, status: :ok
#         else
#             # session[:login_attempts] ||= 0
#             # session[:login_attempts] += 1
#             render json: {error: "Invalid Email and/or Password"}, status: :unauthorized
#         end
#     end

#     def logout
#         session.delete :user_id
#         head :no_content
#     end



# end
