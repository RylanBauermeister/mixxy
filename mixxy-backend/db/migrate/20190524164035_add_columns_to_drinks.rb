class AddColumnsToDrinks < ActiveRecord::Migration[5.2]
  def change
    add_column :drinks, :tags, :string
    add_column :drinks, :category, :string
    add_column :drinks, :glass, :string
    add_column :drinks, :instructions, :string
    add_column :drinks, :img_url, :string
  end
end
