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
    end
    render :json => {:message => 'Successfull'}
  end

   def disapprove 
    uid = params[:id]
    if uid
      user = User.find_by(id: uid)
      user.approved = false
      user.save
    end
    render :json => {:message => 'Successfull'}
  end

  private
  def verify_admin
    unless current_user.is_admin
      flash.now[:warning] = "You do not have permission to be here."
      redirect_to root_path
    end
  end
end