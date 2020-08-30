https://codepen.io/ebell_jr/pen/ZEWBmEq
let names = ["Wesley Snipes", "Nicholas Cage", "Nasir Jones","Sean Carter","Sean Combs","Michael Jordan","Patrick Ewing"]
let all_names = [ ];
for (let i=0; i< names.length; i++) {
 let split_names = names[i].split(" ");
  all_names= all_names.concat(split_names);
  }
let first_name = [ ];
let last_name = [ ];
for (let i=0; i< all_names.length; i++) {
 if (i%2 == 0){
   first_name.push(all_names[i])
   console.log(first_name)}
  else {
  last_name.push(all_names[i])
 console.log(last_name)}
}