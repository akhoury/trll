class AddTokenToU < ActiveRecord::Migration
  def change
      add_column :us, :token, :string
  end
end
