https://codepen.io/ebell_jr/pen/MWypxNz
let lyrics = "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling,but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me, "
let split_lyrics = lyrics.split(" ");
let new_lyrics = [ ];
for (let i=0; i<split_lyrics.length;i++){
  let changed_lyrics = split_lyrics[i].replace(/S/gi,"$");
  new_lyrics= new_lyrics.concat(changed_lyrics);
}
let final_string = new_lyrics.join(" ");
console.log(final_string);