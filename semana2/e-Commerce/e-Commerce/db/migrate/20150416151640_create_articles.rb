class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.string :model
      t.string :processorBrand
      t.string :ram
      t.string :price

      t.timestamps null: false
    end
  end
end
