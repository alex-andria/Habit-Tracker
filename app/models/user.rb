class User < ApplicationRecord
    has_secure_password
    has_many :habits

    validates :email, presence: true, 
    validates_format_of :email, :with => /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i
    validates :name, presence: true, length: {maxmimum: 20}
    validates :password_digest, presence: true, length:{minimum: 8}
    
end
