class CreateExpenses < ActiveRecord::Migration[5.0]
  def change
    create_table :expenses do |t|
      t.datetime :paid_at
      t.string :description
      t.belongs_to :group, foreign_key: true
      t.monetize :amount

      t.timestamps
    end
  end
end
