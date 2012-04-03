class UrlsController < ApplicationController
  def new
    @short_url = Url.new
  end
  
  def create
    @short_url = Url.new(params[:url])
    if @short_url.save
      flash[:short_id] = @short_url.id
      redirect_to new_url_url
    else
      render :action => "new"
    end
  end
  
  def show
    @short_url = Url.find(params[:id])
    redirect_to @short_url.url unless @short_url.fun
    if @short_url.turn
      @short_url.turn = false
      @short_url.save!
      redirect_to @short_url.url
    else
      @short_url.turn = true
      @short_url.save!
      redirect_to @short_url.alt_url
    end
  end
    
end
