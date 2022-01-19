// console.log("working")

// let heading = document.getElementById('#heading')
// let heading = document.getElementsByClassName('.heading')

// let div = document.getElementsByClassName('.container')

// let div2 = document.getElementsByTagName('div')

// let heading = document.querySelector('.heading')
// let heading = document.querySelectorAll('.conatianer')

// let heading = document.querySelector('.heading')

// heading.innerText = "nazim"

// let div = document.querySelector('#root')

// let heading = document.createElement('h1')

// heading.setAttribute('class','title')
// heading.innerText = "Card Title"

// let line = document.createElement('hr')

// let title = document.createElement('h2')

// title.innerText = "Card Subtitle"

// let card = document.createElement('div')

// card.style.border = "1px solid black"
// card.style.height = "500px"
// card.style.width = "500px"
// card.style.boxShadow = "2px"
// card.style.backgroundColor = "red"

// card.append(heading)
// card.append(line)
// card.append(title)

// card.remove()

// div.append(card)

// let Button = document.createElement('button')
// Button.innerText = "Submit"

// card.append(Button)

// let submit = document.querySelector('.btn')

// // submit.addEventListener('mouseover', ()=>{
// //     // console.log('button clicked')
// //     submit.innerText = "Mouse over"
// // })

// // submit.addEventListener('mouseout', ()=>{
// //     // console.log('button clicked')
// //     submit.innerText = "Mouse out"
// // })

// // let click = document.querySelector('.btn')

// // click.addEventListener('mouseover',function(){
// //     const height = Math.floor(Math.random() * 500)
// //     const width = Math.floor(Math.random() * 500)
// //     click.style.left = `${height}px`
// //     click.style.top = `${width}px`

// // })

// // click.addEventListener('click',function(){
// //     click.innerText = "Button Clicked"
// //     click.style.backgroundColor = 'green'
// // })

// const colors = ['red','blue','green','yellow']

// let container = document.querySelector('#boxes')

// const changeColor = function(event){
//     console.log(event)
//     const h1 = document.querySelector('h1')
//     h1.style.color = this.style.backgroundColor
//     h1.innerText = this.style.backgroundColor + ' selected'
// }

// for(let color of colors){
//     const box = document.createElement('div')
//     box.style.backgroundColor = color
//     box.setAttribute('class','color-box')

//     container.append(box)

//     box.addEventListener('click',changeColor)

// }

// let heading = document.createElement('h1')
// heading.setAttribute('class','root')

// ///////////////////////////////////////////////////////////////////

// const input = document.querySelector('input')

// input.addEventListener('keydown',(e)=>{
//     // console.log('Key pressed')
//     console.log(e.key)

// })

// input.addEventListener('keypress',(e)=>{
//     // console.log(e.target.value)

//     // let value = e.target.value
//     // console.log(value)
// })

const form = document.querySelector("form");
const ul = document.querySelector("ul");

const input = document.querySelector(".todo");
const submit = document.querySelector(".submit");

let task;

const list = document.querySelector(".todo-list");

const p = document.createElement("p");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("form submitted")

  // console.dir(e.target.elements.task.value)

//   if(input.value === " "){
//       submit.disabled = 'true'

//   }
  const p = document.createElement("p");

  task = e.target.elements.task.value;
  p.innerText = task;

  const card = document.createElement("div");
  card.setAttribute("class", "card");

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Detele";

  const done = document.createElement("button");
  done.innerText = "Done";

  const edit = document.createElement("button");
  edit.innerText = "Edit";

  card.append(p);
  card.append(deleteBtn);
  card.append(edit);
  card.append(done);

  list.append(card);
  //   console.log(task)

  e.target.elements.task.value = " ";

  deleteBtn.addEventListener("click", () => {
    card.remove();
  });

  done.addEventListener("click", () => {
    p.style.textDecoration = "line-through";
    card.style.backgroundColor = 'green'
  });

  edit.addEventListener("click", (e) => {
    input.value = p.innerText;
    card.remove();
  });
});
