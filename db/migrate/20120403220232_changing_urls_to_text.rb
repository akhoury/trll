class ChangingUrlsToText < ActiveRecord::Migration
  def up
   change_column :us, :url, :text
   change_column :us, :alt_url, :text
  end

  def down
   change_column :us, :url, :string
   change_column :us, :alt_url, :string
  end
end
