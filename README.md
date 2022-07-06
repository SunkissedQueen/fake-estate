## Process
- $ rails new some-spaces -d postgresql -T
- $ cd some-spaces
- $ rails db:create
- $ bundle add webpacker
- $ bundle add react-rails
- $ rails webpacker:install
- $ rails webpacker:install:react
- $ yarn add @babel/preset-react
- $ yarn add @rails/activestorage
- $ yarn add @rails/ujs
- $ rails generate react:install
- $ rails generate react:component App
- $ rails generate controller Home
```ruby
# Add a file in app/views/home called index.html.erb
# Add the following:
<%= react_component 'App' %>

# Go to app/views/layouts/application.html.erb
# Find this line:
<%= javascript_importmap_tags %>
# And replace it with this:
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>

# Go to config/routes.rb
# Add the following:
Rails.application.routes.draw do
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
```

## Troubleshooting Tips
- command + P to search for files
- Stop the server and start it again.
- Did all the setup commands run properly? The commands can be rerun if something isn't working.
- Seeing a blank page? Look for errors in the terminal or inspect your page.
- Errors? Always look at the first error in the list.

### You can copy Devise views (for customization) to your app by running:
- $ rails g devise:views

### Update and change devise 
- db/migrate/20220705204735_devise_create_users.rb

## Devise Setup
- Stop the server and start it again.
- $ bundle add devise
- $ rails generate devise:install
- $ rails generate devise User
- $ rails db:migrate

## Sign In and Sign Up
> http://localhost:3000/users/sign_up

> http://localhost:3000/users/sign_in

## Checking the data entries after completing a sign-up
```
$ rails c
> User.all
 => []                                                   
> User.all
 => [#<User id: 1, email: "me@all.day", created_at: "2022-07-05 20:57:33.650021000 +0000", updated_at: "2022-07-05 20:57:33.650021000 +0000">] 
```

```ruby
# Go to app/views/home/index.html.erb, add a second argument

  <%= react_component 'App', {
    logged_in: user_signed_in?,
    current_user: current_user,
    new_user_route: new_user_registration_path,
    sign_in_route: new_user_session_path,
    sign_out_route: destroy_user_session_path
  } %>


# Destructure the routes in App.js
  const {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route
  } = this.props
  console.log("logged_in:", logged_in)
  console.log("current_user:", current_user)
  console.log("new_user_route:", new_user_route)
  console.log("sign_in_route:", sign_in_route)
  console.log("sign_out_route:", sign_out_route)

# Go to config/environments/development.rb
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

# Go to config/initializers/devise.rb
# Find this line:
config.sign_out_via = :delete
# And replace it with this:
config.sign_out_via = :get
```
> Add three directories in your React application: assets, components, and pages.

> Use the spread operator to pass all the data coming into App.js on to Header.
```javascript
  return(
    <>
      <Header {...this.props} />
    </>
  )
```

## Add react and bootstrap
- $ bundle add bootstrap
- $ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
- $ yarn add reactstrap

- Go to app/assets/stylesheets/application.scss:  
@import 'bootstrap';

## Conditional rendering on Header.js
```javascript
  render() {
    // move the destructure to Header.js
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    return(
      <>
        <h1>React in Rails with Devise</h1>
        <Nav>
          {logged_in &&
            <NavItem>
              <a href={sign_out_route} className="nav-link">Sign Out</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={sign_in_route} className="nav-link">Sign In</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={new_user_route} className="nav-link">Sign Up</a>
            </NavItem>
          }
        </Nav>
      </>

      // optional for !logged in
                {!logged_in &&
            <NavItem>
              <a href={sign_in_route} className="nav-link">Sign In</a>
              <a href={new_user_route} className="nav-link">Sign Up</a>
            </NavItem>
          }
```

## React Routes
- $ yarn add react-router-dom@5.3.3
- Go to app/javascript/components/App.js
```javascript
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
```

## Resources/Associations