class CreateUs < ActiveRecord::Migration
  def change
    create_table :us do |t|
      t.string :url, :null => false

      t.timestamps
    end
  end
end
