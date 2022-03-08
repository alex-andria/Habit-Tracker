class User < ApplicationRecord
    has_secure_password
    has_many :habits

    validates :email, presence: true, uniqueness: true 
    validates :name, presence: true
    validates :name, length: {maximum: 20}
    validates :password_digest, presence: true
    validates :password_digest, length:{minimum: 8}
    
end
