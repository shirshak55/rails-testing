class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable,
				 :omniauthable, :omniauth_providers => [:facebook]
				 
	after_create :send_admin_mail

	def self.new_with_session(params, session)
	  super.tap do |user|
	    if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
	      user.email = data["email"] if user.email.blank?
	    end
	  end
	end

  def send_admin_mail
    puts 'Send Facebook Group Admin'
  end

	def self.from_omniauth(auth)
	  where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
	    user.email = auth.info.email
	    user.password = Devise.friendly_token[0,20]
	    user.provider = auth.provider
	    user.name = auth.info.name   
	    user.image = auth.info.image 
	  end
	end

  def active_for_authentication? 
    self.is_admin || (super && approved? && active? && admin_active?)
	end 

	scope :unapproved, -> { where(approved: false) } 

	def send_confirmation_notification?
		false
	end
  
  def is_admin
  	return self.id === 1
  end
end
