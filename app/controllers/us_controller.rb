class UsController < ApplicationController
  require 'rufus/mnemo'
  
  def new
    @short_url = U.new
  end
  
  def create
    @short_url = U.new(params[:u])
    @short_url.creator = request.remote_ip
    @short_url.hits = 0;
    if @short_url.botlove.present?
      a =  [('a'..'z'),('A'..'Z')].map{|i| i.to_a}.flatten;  
      b = (0..6).map{ a[rand(a.length)]  }.join;
      flash[:short_id] = b
      redirect_to new_u_url
    elsif !@short_url.url.present? || !@short_url.alt_url_present? 
      flash[:notice] = "URL(s) cannot be blank, k? k."
      redirect_to new_u_url
    elsif !@short_url.url_valid? || !@short_url.alt_url_valid?  
      flash[:notice] = "URL(s) are invalid (must begin with 'http://' or 'https://'), you know?"
      redirect_to new_u_url
    elsif @short_url.save
      flash[:short_id] = Rufus::Mnemo::from_integer(@short_url.id)
      
      @short_url.token = flash[:short_id]
	    @short_url.save!  
      redirect_to new_u_url
    else
      render :action => "new"
    end
  end
  
  def show
    @short_url = U.find_by_token(params[:id])
    unless @short_url
      return redirect_to new_u_url, :notice => "URL not found, BA DUM TSS!"
    end
    
    @short_url.hits = 0 if !@short_url.hits
    @short_url.hits = @short_url.hits + 1  
    if !@short_url.fun
      @short_url.save!
      return redirect_to @short_url.url 
    end
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
    
  def all
    flash[:notice] = nil
    @latest_urls = U.last(100).reverse
  end

end

