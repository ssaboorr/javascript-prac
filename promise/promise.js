// const todo = input // get user input

// saveToDatabase()
// saveToDatabase()
// saveToDatabase()
// saveToDatabase()
// saveToDatabase()
// saveToDatabase() //    callStack

// display input //

// let name = ":sabppr"

/*
greet2
greet
prnt
*/

// console.log("hello world")

// console.log("good mornig")
// console.log("good night")

// const db = (value) => {
//     return savetodatabase /// 5 min
// }

// const dispaly

//  pormise:

//  1st fulfill
// 2nd reject
// pending

// Promise -------------

// let myPromise = new Promise(function(resolve,reject){
//     // do something
// })

// const count = ture;

// let countValue = new Promise((resolve,reject)=>{
//     if(count){

//         resolve("we got the")
//         // dispa
//     } else {
//         reject("count value is false")
//     }
// })

// console.log(countValue)

// let countValue = new Promise((resolve, reject) => {});

// countValue
//   .then(() => {
//     console.log("get image");
//   })
//   .then(() => {
//     console.log("get data");
//   })
//   .then(() => {
//     console.log("get data");
//   })
//   .then(() => {
//     console.log("get data");
//   })
//   .then(() => {
//     console.log("get data");
//   })
//   .catch(() => {
//     console.log("promise rejected");
//   });
// https://www.aiktc.com/postes/


// const print = () => {
//     return console.log("promise is fullfileed")
// }

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pages = {
//         "/users": [
//           { id: 1, username: "saboor" },
//           { id: 2, username: "nazim" },
//         ],
//         "/users/1": {
//           id: 1,
//           username: "saboor",
//           post: 243324,
//           city: "mumbai",
//         },
//         "/users/2": {
//           id: 2,
//           username: "nazim",
//           post: 567,
//           city: "thane",
//         },
//         "/posts/243324": {
//           id: 1,
//           title: "hellow world",
//         },
//       };

//       const data = pages[url];

//       if (data) {
//         resolve({status: 200, data });
//       } else {
//         reject({ status: 404 });
//       }
//     }, 1000);
//   });
// };

// console.log(fakeRequest())

// fakeRequest("/users")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => console.log(err));


// fakeRequest("/users").then((result) => {
//     console.log(result)
//     const id = result.data[0].id
//     // console.log(`/users/${id}`)
//     return fakeRequest(`/users/${id}`)
// }).then((result) => {
//     // console.log(result)
//     const post = result.data.post
//     console.log(post)
//     return fakeRequest(`/posts/${post}`)

// }).then((result) => {
//     const title = result.data.title
//     console.log(title)
// })

