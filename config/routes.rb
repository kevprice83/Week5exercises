Rails.application.routes.draw do
  get '/' => 'characters#index'

  get '/new' => 'characters#new' 

  post '/new' => 'characters#create'

end
