class UsController < ApplicationController
  def new
    @short_url = U.new
  end
  
  def create
    @short_url = U.new(params[:u])
    @short_url.creator = request.remote_ip
    @short_url.hits = 0;

    if !@short_url.url.present? || !@short_url.alt_url_present? 
      flash[:notice] = "URL(s) cannot be blank, k? k."
      redirect_to new_u_url
    elsif !@short_url.url_valid? || !@short_url.alt_url_valid?  
      flash[:notice] = "URL(s) are invalid (must begin with 'http://' or 'https://'), you know?"
      redirect_to new_u_url
    elsif @short_url.save
      flash[:short_id] = @short_url.id
      redirect_to new_u_url
    else
      render :action => "new"
    end
  end
  
  def show
    @short_url = U.find(params[:id])
    @short_url.hits = @short_url.hits + 1
    @short_url.save!
    return redirect_to @short_url.url unless @short_url.fun
    if @short_url.turn
      @short_url.turn = false
      @short_url.save!
      return redirect_to @short_url.url
    else
      @short_url.turn = true
      @short_url.save!
      return redirect_to @short_url.alt_url
    end
  end
    
  def index
    @latest_urls = U.last(100).reverse
  end

end
