class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :paid_at, :description

  attribute(:amount) { object.amount.to_f }
  attribute(:amount_formatted) { object.amount.format }

  has_one :group
end
