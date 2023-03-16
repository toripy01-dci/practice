require 'erb'
str = "hoge"
erb = ERB.new("value = <%= str %>")
puts erb.result(binding)