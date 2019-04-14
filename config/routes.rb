Rails.application.routes.draw do
	root 'home#index'

	namespace :admin do
		get '', to: 'dashboard#index', as: '/'
	  get 'manage-users', to: 'users#index'
	  get 'users/:id/approve', to: 'users#approve'
	  get 'users/:id/disapprove', to: 'users#disapprove'
	end

	get 'login/status', to: 'login_status#show'
	devise_for :users, :controllers => { :omniauth_callbacks => "omniauth_callbacks",   :sessions => "users/sessions" }
end
