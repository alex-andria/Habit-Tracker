class UserWithHabitsSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest
  has_many :habits
end
