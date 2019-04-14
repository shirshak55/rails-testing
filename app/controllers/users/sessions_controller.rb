class Users::SessionsController < Devise::SessionsController
  def new
     redirect_to root_path(message: 'Please wait for Admin Approval')
  end
end