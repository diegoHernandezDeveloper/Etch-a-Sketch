let main = document.querySelector('main')
let btn = document.querySelector('button')

generateDivs(16)
function generateDivs(num) {
    console.log(num)
    if(num == 0) return alert('please enter a number')
    if(num >= 100) return alert('please enter a number equal or below 100')
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
    let colorValue = document.querySelector('#select').value

    main.textContent = ''
    for (let i = 0; i < num*num ; i ++) {
    let div = document.createElement('div')
    div.style.width = `calc(600px / ${num})`
    div.style.height = `calc(600px / ${num})`
    div.addEventListener('mouseenter', (e) => {
        e.target.style.background = (colorValue == 'black' ? 'black' : `${colors[Math.floor(Math.random() *7)]}`)
    }, {once: true})
    main.appendChild(div)
}}

btn.addEventListener('click', getInput)


function getInput() {
    let gridNumber = +document.querySelector('input').value
    generateDivs(gridNumber)

}

let color = document.querySelector('#select')
color.addEventListener('change', getInput)




