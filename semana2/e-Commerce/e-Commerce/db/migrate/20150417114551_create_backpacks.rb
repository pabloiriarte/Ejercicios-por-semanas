class CreateBackpacks < ActiveRecord::Migration
  def change
    create_table :backpacks do |t|
      t.string :color
      t.string :capacity
      t.string :pockets
      t.string :waterproof

      t.timestamps null: false
    end
  end
end
