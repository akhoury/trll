require 'test_helper'

class UsControllerTest < ActionController::TestCase
  test "should get n" do
    get :n
    assert_response :success
  end

end
