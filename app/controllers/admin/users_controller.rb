class Admin::UsersController < ApplicationController
  #layout 'dashboard' 
  before_action :authenticate_user! 
  before_action :verify_admin 

  def index
    if params[:unapproved]
      @unapproved_users = User.unapproved
    else
      @users = User.all
    end
  end

  def approve 
    uid = params[:id]
    if uid
      user = User.find_by(id: uid)
      user.approved = true
      user.save

      Devise::Mailer.confirmation_instructions(user, user.confirmation_token).deliver
    end

    redirect_to root_path(message: 'Succesfully Activated')
  end

   def disapprove 
    uid = params[:id]
    if uid
      user = User.find_by(id: uid)
      user.approved = false
      user.save
    end
    redirect_to root_path(message: 'Succesfully Unactivated')
  end

  private
  def verify_admin
    unless current_user.is_admin
      redirect_to root_path(message: 'You do not have permission to go admin side.')
    end
  end
end