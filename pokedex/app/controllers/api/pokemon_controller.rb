class Api::PokemonController < ApplicationController
  def create
  end

  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    if @pokemon
      render :show
    end
  end
end
