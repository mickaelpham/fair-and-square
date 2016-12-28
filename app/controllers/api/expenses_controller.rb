class Api::ExpensesController < ApplicationController
  before_action :set_expense, only: [:show, :update, :destroy]

  # GET /api/expenses/1
  def show
    render json: @expense, include: [:group]
  end

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

  # PATCH/PUT /api/expenses/1
  def update
    if @expense.update(expense_params)
      render json: @expense
    else
      render json: @expense,
        status: :unprocessable_entity,
        serializer: ActiveModel::Serializer::ErrorSerializer
    end
  end

  private

  def set_expense
    @expense = Expense.find(params[:id])
  end

  def expense_params
    ActiveModelSerializers::Deserialization.jsonapi_parse!(
      params,
      only: [:description, :paid_at, :amount, :group]
    )
  end
end
