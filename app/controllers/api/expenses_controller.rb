class Api::ExpensesController < ApplicationController
  # POST /api/expenses
  def create
    @expense = Expense.new(expense_params)

    if @expense.save
      render json: @expense,
        status: :created,
        location: api_expense_url(@expense)
    else
      render json: @expense,
        status: :unprocessable_entity,
        serializer: ActiveModel::Serializer::ErrorSerializer
    end
  end

  def expense_params
    ActiveModelSerializers::Deserialization.jsonapi_parse!(
      params,
      only: [:description, :paid_at, :amount, :group]
    )
  end
end
