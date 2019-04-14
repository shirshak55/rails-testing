class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    @user = User.from_omniauth(request.env["omniauth.auth"])

    if @user.persisted?
      sign_in @user, :event => :authentication
      redirect_to root_path(message: 'Succesfull')
    else
      session["devise.facebook_data"] = request.env["omniauth.auth"]
       redirect_to root_path(message: 'Error on Login')
    end
  end

  def failure
    redirect_to root_path(message: 'Failed to Login')
  end
end