# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Article.create( title: "My first article", text: "Welcome to my blog!")
Article.create( title: "Learning Rails", text: "Rails is awesome!")
     #creates add an article to the database
