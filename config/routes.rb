Rails.application.routes.draw do
  
  resources :habits
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  post '/login', to: "sessions#login"
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
