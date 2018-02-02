Rails.application.routes.draw do
  root to: 'static_pages#root'

  #defaults is plural please!
  namespace :api, defaults: {format: :json} do
    resources :recipes
    resources :stories
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end
