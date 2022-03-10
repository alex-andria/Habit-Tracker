Rails.application.routes.draw do
  resources :habits

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!


  # debbug2
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # debbug1
  # post "/signup", to: "users#create"
  # get "/authorized_user", to: "users#show"

  # post '/login', to: 'sessions#login'
  # delete '/logout', to: 'sessions#logout'

  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
