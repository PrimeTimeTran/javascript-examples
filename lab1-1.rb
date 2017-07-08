hours_in_day = 24
minutes_in_hour = 60
seconds_in_minute = 60
bobs_age_seconds = 1246000000

puts "--------------------------- A1 ---------------------------"
puts "1. There are #{hours_in_day * 365} hours in a year"
puts "2. There are #{minutes_in_hour * hours_in_day * 365 * 10} minutes in a decade."
puts "3. I am #{29 * 365 * hours_in_day * minutes_in_hour * seconds_in_minute} seconds old!"
puts "4. If I'm 1,246,000,000 seconds old, I am #{ bobs_age_seconds/(seconds_in_minute * minutes_in_hour * hours_in_day * 365)} years old"

puts "\n--------------------------- Bob --------------------------"
bobs_age = bobs_age_seconds/(seconds_in_minute * minutes_in_hour * hours_in_day * 365)
acceptable_age = (bobs_age / 2) + 7
maximum_age = (bobs_age - 7 ) * 2
puts "Because Bob is 39, Bob can date people from #{acceptable_age} to #{maximum_age}"

puts "\n--------------------------- Alex -------------------------"
bobs_age = bobs_age_seconds/(seconds_in_minute * minutes_in_hour * hours_in_day * 365)
alex_age_years = (192720 / 24 ) / 365
maximum_age = (alex_age_years - 7 ) * 2

#   acceptable_age(22, 39)
def yrs_til_acceptable(younger, older)
  original_age = younger
  ok = false
  while ok == false
    formula = (older / 2) + 7
    if formula == younger
      ok = true
    else
      older += 1
      younger += 1
    end
  end
  younger - original_age
end

years = yrs_til_acceptable(alex_age_years, bobs_age)
hours_until_acceptable = (years * 365) * 24

puts "Alex is currently #{alex_age_years}, the maximum age she can currently date is #{maximum_age}. \nIt will be #{hours_until_acceptable} hours before she can date Bob, or #{years} years before not violating the (n/2 + 7 rule).  "


puts "\n--------------------------- A2 ---------------------------"
puts "Hello world"
print "Hello world"

name = "Loi Tran"
puts " <---- print does not end the line with a newline character \\n"
puts "Hello " + name
name = "Harley Trung"
puts "Hello " + name
5.times do
  puts "Loi Tran"
end

puts "I know the + and the * operator can be used with strings."

puts "\n--------------------------- A3 ---------------------------"
name = "Loi Tran"
50.times do
  print name
end

print "Roses are red, violets are blue"

first_name = "Loi"
last_name = "Tran"
full_name = first_name + " " + last_name

puts "What's your name?"
response = gets.chomp

puts "Welcome #{response}"
