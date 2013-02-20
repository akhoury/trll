class MergingOldRecords < ActiveRecord::Migration
  def up
     require 'rufus/mnemo'
     U.all.each {|u| u.update_attribute(:token, Rufus::Mnemo::from_integer(u.id))}	 
   end

  def down
  end
end
