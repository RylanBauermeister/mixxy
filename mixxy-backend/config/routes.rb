Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :update, :destroy]
      post '/login', to: 'auth#login'
      get '/profile', to: 'users#profile'
      get '/shelf/:id', to: 'users#shelf'
      post 'add_drink', to: 'users#addDrink'
      delete 'remove_drink/:id', to: 'users#removeDrink'
      get 'authorize', to: 'auth#validate'
      get '/searchbyname', to: 'drinks#searchByName'
      get '/searchbyingredient', to: 'drinks#searchByIngredient'
    end
  end
end
