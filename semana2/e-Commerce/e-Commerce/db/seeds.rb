# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Article.create( title: "MacBook1", model: "Pro", processorBrand: "Intel", ram: 8, price: 1200.00)
Article.create( title: "MacBook2", model: "Pro", processorBrand: "Intel", ram: 8, price: 1400.00)
Article.create( title: "MacBook3", model: "Pro", processorBrand: "Intel", ram: 8, price: 1600.00)
Article.create( title: "MacBook4", model: "Air", processorBrand: "Intel", ram: 7, price: 1000.00)
     #creates add an article to the database
Backpack.create(color: "red_backpack", capacity: "10", pockets: "4", waterproof: "yes")
Backpack.create(color: "blue_backpack", capacity: "10", pockets: "4", waterproof: "yes")