class CreateUserDrinks < ActiveRecord::Migration[5.2]
  def change
    create_table :user_drinks do |t|
      t.integer :drink_id
      t.integer :user_id
    end
  end
end
