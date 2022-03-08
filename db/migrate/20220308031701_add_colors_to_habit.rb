class AddColorsToHabit < ActiveRecord::Migration[6.1]
  def change
    add_column :habits, :color_code, :string
  end
end
