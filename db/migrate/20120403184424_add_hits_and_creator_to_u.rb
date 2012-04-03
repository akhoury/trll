class AddHitsAndCreatorToU < ActiveRecord::Migration
  def change
    add_column :us, :hits, :integer
    add_column :us, :creator, :string
  end
end
