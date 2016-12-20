class Expense < ApplicationRecord
  belongs_to :group
  monetize :amount_cents
end
