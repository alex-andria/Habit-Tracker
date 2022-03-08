class SessionsController < ApplicationController

    def login
        user = User.find_by(email:params[:email])
        

        if user&.authenticate(params[:password])

            render json:user, serializer: UserWithHabitsSerializer, status: :ok
        else
            
            render json: {error: "Invalid User name or password"}
        end

        
    end


end
