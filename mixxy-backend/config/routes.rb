Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      post '/login', to: 'auth#login'
      get '/profile', to: 'users#profile'
      get '/searchbyname', to: 'drinks#searchByName'
    end
  end
end
