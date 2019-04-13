Rails.application.routes.draw do
	namespace :admin do
		get '', to: 'dashboard#index', as: '/'
	  get 'manage-users', to: 'users#index'
	  get 'users/:id/approve', to: 'users#approve'
	  get 'users/:id/disapprove', to: 'users#disapprove'
	end
	root 'home#index'


	get 'login/status', to: 'login_status#show'
	devise_for :users, :controllers => { :omniauth_callbacks => "omniauth_callbacks" }
end
