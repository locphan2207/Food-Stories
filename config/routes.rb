Rails.application.routes.draw do
  root to: 'static_pages#root'

  #defaults is plural please!
  namespace :api, defaults: {format: :json} do
    post '/recipes/search', to: 'recipes#search'
    post '/recipes/search_by_ids', to: 'recipes#search_by_ids'
    post '/stories/search_by_ids', to: 'stories#search_by_ids'

    resources :recipes, only: [:index, :show, :create, :update] do
      resources :comments, only: [:create]
      resources :likes, only: [:create]
      resources :steps, only: [:create]
    end

    resources :stories, only: [:index, :show] do
      resources :comments, only: [:create]
      resources :likes, only: [:create]
    end

    resources :comments, only: [:destroy] do
      resources :likes, only: [:create]
    end

    resources :likes, only: [:destroy]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end
