class Users::SessionsController < Devise::SessionsController
  def new
     redirect_to root_path(message: 'Approval')
  end
end