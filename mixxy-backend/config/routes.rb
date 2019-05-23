Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :user, only: [:create]
      post '/login', to: 'auth#login'
  end
end
