class LoginStatusController < ApplicationController
	def show
		if current_user
			render :json => {status: 'logged_in', name: current_user[:name]} 
		else
			render :json => {status: 'logged_out'}
		end
	end
end
