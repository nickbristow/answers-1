source 'https://rubygems.org'

ruby '1.9.3'
gem 'nokogiri'
gem 'rails', '3.2.13'
gem 'pg'
gem 'thin'
gem 'foreman'

gem 'newrelic_rpm', group: [:production, :staging, :development]
gem 'annotate', '~>2.4.1.beta'
gem 'progressbar'
gem 'facets', require: false
gem 'jquery-ui-rails'
gem 'jquery-rails', '~> 2.3.0'

gem 'meta-tags', require: 'meta_tags'

gem 'delayed_job_active_record'
gem 'dalli'
gem 'kgio'

gem 'activeadmin', '0.4.4'
gem 'devise', '~> 2.0'
gem 'cancan'

gem 'tanker'
gem 'text'
gem 'httparty'
gem 'json'
gem 'indextank'

gem 'bluecloth'
gem 'kramdown'
gem 'friendly_id', '~> 4.0'
gem 'gon'
gem 'paperclip', '~> 3.0'
gem 'aws-sdk', '~> 1.3.4'

group :assets do
  gem 'sass-rails', '~> 3.2.5'
  gem "meta_search", '>= 1.1.0.pre'
  gem 'uglifier', '>= 1.0.3'
  gem 'less-rails-bootstrap'
  gem 'coffee-rails', '~> 3.2.1'
  gem 'therubyracer'
end

group :development do
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'guard'
  gem 'pry'
  gem 'pry-nav'
end

group :test, :development do
  gem 'dotenv-rails'
  gem 'guard-spork'
  gem 'memcached'
  gem 'rspec-rails', '>= 2.10.1'
end

group :test do
  gem 'capybara'
  gem 'capybara-webkit'
  gem 'database_cleaner'
  gem 'factory_girl_rails'
  gem 'launchy'
  gem 'shoulda'
  gem 'simplecov', '~> 0.7.1', require: false
  gem 'spork-rails'
  gem 'webmock'
end
