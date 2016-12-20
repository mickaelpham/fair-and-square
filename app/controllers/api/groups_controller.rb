class Api::GroupsController < ApplicationController
  before_action :set_group, only: [:show, :update, :destroy]

  # GET /api/groups
  def index
    render json: Group.all
  end

  # GET /api/groups/1
  def show
    render json: Group.includes(:expenses).find(params[:id]), include: [:expenses]
  end

  # POST /api/groups/1
  def create
    @group = Group.new(group_params)

    if @group.save
      render json: @group, status: :created, location: api_group_url(@group)
    else
      render json: @group,
        status: :unprocessable_entity,
        serializer: ActiveModel::Serializer::ErrorSerializer
    end
  end

  # PATCH/PUT /api/groups/1
  def update
    if @group.update(group_params)
      render json: @group
    else
      render json: @group,
        status: :unprocessable_entity,
        serializer: ActiveModel::Serializer::ErrorSerializer
    end
  end

  # DELETE /api/groups/1
  def destroy
    @group.destroy
    head :no_content
  end

  private

  def set_group
    @group = Group.find(params[:id])
  end

  def group_params
    ActiveModelSerializers::Deserialization.jsonapi_parse!(
      params,
      only: [:name, :description]
    )
  end
end
