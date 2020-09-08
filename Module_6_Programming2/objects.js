let car = {
	company: "Nissan",
	model: "Maxima",
	year: "2020",
	color: "silver",
	soundOff: (){return "Vroom!"}
	get yr() {
	return this.year;
	}
	set yr(yr) {
	this.year = yr;
	}
};

let sports team = {
	name: "New York Yankees",
	sport: "Baseball",
	location: "The Bronx",
	general manager: "Brian Cashman",
	chant: function(){console.log(Take me out to the ball game!)}
	get gm() {
	return this.general manager; 
	}
	set gm(gm){
	this.general manager = gm;
	}
};

let animal = {
	name: "Panther",
	color: "Black",
	species type: "Big Cats",
	group behavior: "solitary",
	sound: () {alert("ROARRR!")}
	get typ() {
	return this.species type;
	}
	set typ(typ) {
	this.species type = typ;
	}
};