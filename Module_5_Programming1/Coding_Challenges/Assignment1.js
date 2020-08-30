https://codepen.io/ebell_jr/pen/vYGLBOZ
let weekly_income = prompt ("weekly income")
console.log (parseInt(weekly_income))
let food_cost = prompt ("food cost")
console.log (parseInt(food_cost))
let housing_cost = prompt ("housing cost")
console.log (parseInt(housing_cost))
let transportation_cost = prompt ("transportation cost")
console.log (parseInt(transportation_cost))
let other_cost = prompt ("other cost")
console.log (parseInt(other_cost))
let how_much_you_want_to_save_in_a_year = prompt ("How much you want to save in a year?")
console.log ((parseInt(how_much_you_want_to_save_in_a_year))/52)
let total_weekly_cost = ((parseInt(food_cost)) + (parseInt(housing_cost)) + (parseInt(transportation_cost)) + (parseInt(other_cost)))
console.log (parseInt(total_weekly_cost))
let profit = (parseInt(weekly_income)) - (parseInt(total_weekly_cost))
console.log (parseInt(profit))
if ((parseInt(profit)) > ((parseInt(how_much_you_want_to_save_in_a_year))/52)){
            console.log("Big Bank take lil bank. You're on track!")}
else {
  let x = (((parseInt(how_much_you_want_to_save_in_a_year))/52))-((parseInt(profit)))
  console.log ('You need to save '+ x +' more')
}