class AddInitialFieldsToU < ActiveRecord::Migration
  def change
    add_column :us, :fun, :boolean, {:default => false}
    add_column :us, :alt_url, :string
    add_column :us, :turn, :boolean, {:default => false}
  end
end
