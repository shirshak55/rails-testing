class LoginStatusController < ApplicationController
	def show
		if current_user
			render :json => {status: 'logged_in', name: current_user[:name], logout_path: ActionController::Base.helpers.url_for(destroy_user_session_path)} 
		else
			render :json => {status: 'logged_out', login_path: user_facebook_omniauth_authorize_path}
		end
	end
end
