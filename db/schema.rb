# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120814033542) do

  create_table "urls", :force => true do |t|
    t.string   "url",                           :null => false
    t.datetime "created_at",                    :null => false
    t.datetime "updated_at",                    :null => false
    t.boolean  "fun",        :default => false
    t.string   "alt_url"
    t.boolean  "turn",       :default => false
  end

  create_table "us", :force => true do |t|
    t.text     "url",        :limit => 255,                    :null => false
    t.datetime "created_at",                                   :null => false
    t.datetime "updated_at",                                   :null => false
    t.boolean  "fun",                       :default => false
    t.text     "alt_url",    :limit => 255
    t.boolean  "turn",                      :default => false
    t.integer  "hits"
    t.string   "creator"
    t.string   "token"
    t.string   "botlove"
  end

  add_index "us", ["token"], :name => "index_us_on_token", :unique => true

end
