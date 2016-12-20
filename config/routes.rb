Rails.application.routes.draw do
  namespace :api do
    resources :groups do
      resources :expenses
    end
  end

  mount_ember_app :frontend, to: '/'
end
