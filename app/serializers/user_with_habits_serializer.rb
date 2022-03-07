class UserWithHabitsSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password
  has_many :habits
end
