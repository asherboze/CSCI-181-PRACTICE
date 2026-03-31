// Trip Code for week 11

// Setting our variables.
const driver_name = "Jared";
const distance_miles = 100
const mpg = 25
const gas_price = 3.49
let fuel_capacity = 26
const is_round_trip = true

let total_distance;

if (is_round_trip == true) {
    total_distance = distance_miles*2
    console.log(total_distance)
}
else {
    total_distance = distance_miles
    console.log(total_distance)
}

function calculateGallonsNeeded(total_distance, mpg) {
    return total_distance/mpg
}

// This next function assumes that the car is full of gas when we start and that we only fill up our car as much as we need to make the trip.
function calculateFuelCost(total_distance, mpg, fuel_capacity, gas_price) {
  const GALLONS_NEEDED = calculateGallonsNeeded(total_distance, mpg);
  const EXTRA_GALLONS = Math.max(0, GALLONS_NEEDED - fuel_capacity);
  return EXTRA_GALLONS * gas_price;
}

//Setting up a variable to subtract from in order to reach our exit condition and ticker to count stops.
let stops = 0;
let distance_to_travel = total_distance;
let max_range = fuel_capacity*mpg;
while (distance_to_travel> max_range){
    const GALLONS_NEEDED = calculateGallonsNeeded(distance_to_travel, mpg)
    stops++
    distance_to_travel -= max_range
    console.log(`Stops: ${stops}   Distance Traveled: ${total_distance-distance_to_travel}   Estimated Gas Spending ${stops*fuel_capacity*gas_price}`)
}

console.log(`Driver Name: ${driver_name}`)
console.log(`Total Distance: ${total_distance}`)
console.log(`Estimated Gallons Needed: ${calculateGallonsNeeded(distance_to_travel, mpg)}`)
console.log(`Estimated Total Cost: ${calculateFuelCost(total_distance,mpg, fuel_capacity, gas_price)}`)