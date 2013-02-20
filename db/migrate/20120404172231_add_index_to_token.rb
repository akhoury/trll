class AddIndexToToken < ActiveRecord::Migration
  def change
    add_index :us, :token, :unique => true
  end
end
