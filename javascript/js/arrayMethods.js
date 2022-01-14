//////////////////     ForEach    ///////////////////////////////////////////////

// const names = ["saboor", "nazim", "aamir"];
// const number = [1, 2, 3, 4, 5, 6];

// function print(name){
//     console.log(name)
// }

// names.forEach((name) => console.log(name))

// number.forEach(function (num) {
//   console.log(num * 2);
// });

const movie = [
  {
    name: "spiderman",
    rating: 9,
  },
  {
    name: "batman",
    rating: 3,
  },
  {
    name: "superman",
    rating: 8,
  },
];


// movie.forEach(function(item){
//     console.log(item.rating)
// })

// ////// Map /////////////



let newMovies = movie.map((obj) => {
    newObj = {}
    newObj.name = obj.name.toUpperCase()
    newObj.rating = obj.rating * 3
    return newObj
})

// console.log(newMovies)


// ///// Find //////////

// const number = [1, 7, 3, 9, 5, 11];


// let even = number.find(function(num){
//     return num % 2 == 0
// })

// console.log(even)



// let higherRating = movie.find((item) => {
//     return item.rating >= 5
// })

// console.log(higherRating)

// let higherRating = movie.filter((item) => {
//     return item.rating >= 5
// })

// console.log(higherRating)


// ////////// some ////////


// const age = [2,3,4,5,6,82]

// let check = age.some((age) => age>18)

// console.log(check)


/// Sort /////////////


// const names = ["saboor", "nazim", "aamir",'zeeshan'];


// console.log(names.sort())

// const number = [2,1099,5453,8990]

// console.log(number.sort())



// const number = [2,1099,8990,5453]


// let sortNum = number.sort(function(a,b){
//     return a-b
// })


// let sortNum2 = number.sort(function(a,b){
//     return b-a
// })
// console.log(sortNum2)

/////// Reduce //////////////////


// let number = [1,2,3,4,5,6,7,8]

// let sum = number.reduce((a,b) => {
//     return a - b
// })

 

// console.log(sum)