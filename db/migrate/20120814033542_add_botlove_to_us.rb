class AddBotloveToUs < ActiveRecord::Migration
  def change
    add_column :us, :botlove, :string
  end
end
