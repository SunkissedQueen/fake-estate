class CreateSpaces < ActiveRecord::Migration[7.0]
  def change
    create_table :spaces do |t|
      t.string :name
      t.text :agenda
      t.string :time_limit
      t.text :image
      t.integer :user_id

      t.timestamps
    end
  end
end
