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


// submit.addEventListener('mouseover', ()=>{
//     // console.log('button clicked')
//     submit.innerText = "Mouse over"
// })

// submit.addEventListener('mouseout', ()=>{
//     // console.log('button clicked')
//     submit.innerText = "Mouse out"
// })


// let click = document.querySelector('.btn')


// click.addEventListener('mouseover',function(){
//     const height = Math.floor(Math.random() * 500)
//     const width = Math.floor(Math.random() * 500)
//     click.style.left = `${height}px`
//     click.style.top = `${width}px`

// })

// click.addEventListener('click',function(){
//     click.innerText = "Button Clicked"
//     click.style.backgroundColor = 'green'
// })


const colors = ['red','blue','green','yellow']

let container = document.querySelector('#boxes')


const changeColor = function(){
    const h1 = document.querySelector('h1')
    h1.style.color = this.style.backgroundColor
    h1.innerText = this.style.backgroundColor + ' selected'
}


for(let color of colors){
    const box = document.createElement('div')
    box.style.backgroundColor = color
    box.setAttribute('class','color-box')

    container.append(box)

    box.addEventListener('click',changeColor)

}

let heading = document.createElement('h1')
heading.setAttribute('class','root')
