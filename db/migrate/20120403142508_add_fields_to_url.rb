class AddFieldsToUrl < ActiveRecord::Migration
  def change
    add_column :urls, :fun, :boolean, {:default => false}
    add_column :urls, :alt_url, :string
    add_column :urls, :turn, :boolean, {:default => false}
  end
end
