console.log("java script");

//Datatypes

// A light switch that can be either on or off.
// Boolean
// A user's email address.
// string
// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// array
// A list of student names from our class.
// Array
// A list of student names from our class, each with a location
// Object
// A list of student names from our class, each with a location and each 
// with a list of favorite tv shows.
// Object

//Take it Easy

// 1. rainbow: ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']
// 2. console.log(rainbow[2]);
// 3. 
//   
//const daniel = {
//	Favourite food: pizza,
//	Hobby: soccer,
//	Current city: austin,
//  Favourite datatype: arrays
// }
// 4. daniel.Hobby;

// Crazy Object

//1. crazyObject.taco.salsa[5];
//2. crazyObject.larry.qoutes[0];
//3. crazyObject.favouriteHobby;
//4. crazyObject.larry.nicknames[1];
//5. 

// Object-ception

//console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null

//
const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

1. 
const bondtitles = [];
	for (i=0; i< bondFilms.length; i++){
		bondtitles.push(bondFilms[i].title);
	}
	console.log(bondtitles);
2.
const oddBonds = [];
  for (i=0; i< bondFilms.length; i++)
  	if (bondFilms[i].year % 2 !== 0){
  oddBonds.push(bondFilms[i].title);
}
console.log(oddBonds);
3.
const culGross = bondFilms.reduce((accum, curr) => {
        const reg = /\W+/g;
        const currGross = parseInt(curr.gross.replace(reg, ''));
        return accum + currGross;
    }, 0); 

console.log(culGross);



