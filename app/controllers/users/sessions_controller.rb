class Users::SessionsController < Devise::SessionsController
  def new
     redirect_to root_path(message: 'Please wait for Admin Approval and make sure to check email')
  end
end