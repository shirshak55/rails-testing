class AddApprovedToUser < ActiveRecord::Migration[5.2]
  def self.up
    add_column :users, :approved, :boolean, :default => false, :null => false
    add_index  :users, :approved

    add_column :users, :admin_approved, :boolean, :default => false, :null => false
    add_index  :users, :admin_approved
  end

  def self.down
    remove_index  :users, :approved
    remove_column :users, :approved

    remove_index  :users, :admin_approved
    remove_column :users, :admin_approved
  end
end