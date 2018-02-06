Rails.application.routes.draw do
  root to: 'static_pages#root'

  #defaults is plural please!
  namespace :api, defaults: {format: :json} do
    post 'search', to: 'recipes#search'
    resources :recipes do
      resources :comments, only: [:create]
    end
    resources :stories do
      resources :comments, only: [:create]
    end
    resources :comments, only: [:destroy]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end
