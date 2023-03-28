module PriceHolder
    def total_price
        price * Tax.rate
    end
end

class Product
    include PriceHolder

    attr_accessor :price
end

class OrderedItem
    include PriceHolder

    attr_accessor :unit_price, :volume

    def price
        unit_price * volume
    end
end