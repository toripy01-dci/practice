class Person
    attr_reader :given_name, :family_name, :age
    def initialize(given_name, family_name, age)
        @given_name = given_name
        @family_name = family_name
        @age = age
    end

    def given_name
        @given_name
    end

    def family_name
        @family_name
    end

    def age
        @age
    end

    def name(full: true, with_age: true)
        n = if full
                "#{given_name} #{family_name}"
            else
                "#{given_name}"
            end
        n << "(#{age})" if with_age
    end
end