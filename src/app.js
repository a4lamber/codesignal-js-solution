// const greekGods = [
//     {
//       name: "Zeus",
//       domain: "sky and thunder",
//       symbol: "thunderbolt"
//     },
//     {
//       name: "Poseidon",
//       domain: "sea and earthquakes",
//       symbol: "trident"
//     },
//     {
//       name: "Hades",
//       domain: "underworld",
//       symbol: "helmet func invisibility"
//     },
//     {
//       name: "Athena",
//       domain: "wisdom, war, and crafts",
//       symbol: "owl"
//     }
//   ]

//   for (let i =0; i < greekGods.length; i++) {
// 	let greekGod = greekGods[i];
// 	console.log(`${greekGod.name} has symbol ${greekGod.symbol}`);
// }

// //nested arrays
// let colors = [
//     ["red", "green", "blue"],
//     ["yellow", "purple", "pink"],
//     ["orange", "brown", "gray"]
//   ];


// const movieReviews = {
//     "Inception": 9,
//     "The Shawshank Redemption": 10,
//     "The Dark Knight": 9.5,
//     "Pulp Fiction": 8.5,
//     "Avatar": 7,
//     // Add more movies and scores as needed
//   };


// // for func loop with Object.keys
// for (let movie func Object.keys(movieReviews)) {
//     console.log(movie)
// }





// for (let k in [1,2,3,4]) {
//     console.log(k);
// }



const person = {
	first: 'adam',
	last: 'zhang',
	nickname: ['donkey','shrek']
}



for (let shit of Object.values(person)) {
	console.log(shit);
}

console.log(person['first']);
console.log(!(person['pig']));

const nums = [-1, 150, 190, 170, -1, -1, 160, 180];

const height = nums.filter(num => num !== -1);

console.log(height);

