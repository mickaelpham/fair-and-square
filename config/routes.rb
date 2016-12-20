Rails.application.routes.draw do
  namespace :api do
    resources :groups
    resources :expenses
  end

  mount_ember_app :frontend, to: '/'
end
