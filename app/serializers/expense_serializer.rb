class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :paid_at, :description
  attribute(:amount_formatted) { object.amount.format }
end
