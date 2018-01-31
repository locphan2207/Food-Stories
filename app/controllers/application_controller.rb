class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user

  def current_user
    user = User.find_by(session_token: session[:session_token])
    return user if user
    nil
  end

  def set_default_response_format
    request.format = :json
  end
end
