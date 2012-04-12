class U < ActiveRecord::Base

  def alt_url_in_use?
    return self.fun
  end
  
  def alt_url_present?
    return true if !self.alt_url_in_use?
    return self.alt_url.present?
  end
  
  def url_valid?
    if !valid_url?(self.url)
      self.url = prepend_http(self.url)
    end
    return valid_url?(self.url)
  end
  
  def alt_url_valid?
    return true if !self.fun
    if !valid_url?(self.alt_url)
	self.alt_url = prepend_http(self.alt_url)
    end
    return valid_url?(self.alt_url)
  end

  def valid_url?(u)
    uri = URI.parse(u)
    if (uri.class == URI::HTTP) || (uri.class == URI::HTTPS)
      return true
    else
      return false
    end
  end

  def prepend_http (u)
    return "http://"+u
  end

end
