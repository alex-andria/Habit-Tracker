# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(name: "Alex", email: "alexandria@yahoo.com", password: "FireLordOzai")
user2 = User.create(name: "Rodney", email: "rod.ney@gmail.com", password: "password1234")

user1_habit = Habit.create(habit_name: "Drink More Water", goal_description:"Drink 91 ounces of water per day.", goal_days: 30, user_id: user1.id)
# user2_habit = Habit.create(habit_name: "Drink More Water", goal_description:"Drink 91 ounces of water per day.", goal_days: 30, user_id: user1.id)
