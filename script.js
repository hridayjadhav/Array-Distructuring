// ES 5

const myFriends = ['Harshal', 'Ishika', 'Nayan', 'Aniket'];

var first = myFriends[0];
var zecond = myFriends[1];
var third = myFriends[2];
var fourth = myFriends[3];

console.log("My Friend name is " + first);




// ES 6

const myBuddies = ['Harshal', 'Ishika', 'Nayan', 'Aniket'];

let [first, second, third, fourth] = myBuddies;
console.log(`My buddy is ${first}`);
console.log("My buddy is " + first);



let [first,,, fourth] = myBuddies;                    
//coma we use to skip, we have use 3 comas to skip and jump directly on fourth

console.log(`My buddy is ${first} and ${fourth}`);
