class SpacesController < ApplicationController

  def index
    spaces = Space.all
    render json: spaces
  end

  def show
    space = Space.find([params[:id]])
    render json: space
  end

  def create
    space = Space.create(space_params)
    if space.valid?
      render json: space
    else
      render json: space.errors
    end
  end

  def update
    space = Space.find(params[:id])
    space.update(space_params)
    if space.valid?
      render json: space
    else
      render json: space.errors
    end
  end

  def destroy
    space = Space.find(params[:id])
    if space.destroy
      render json: space
    else
      render json: space.errors
    end
  end

  private
  def space_params
    params.require(:space).permit(:name, :agenda, :time_limit, :image)
  end

end
