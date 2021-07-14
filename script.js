let count = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
let lista = document.querySelector('#list')
let div = document.getElementsByClassName("barra")

const diceNumbers = () =>  Math.floor(Math.random() * 6 + 1);
    
function generateGraphic() {
    let div = document.getElementsByClassName("barra")

    for (let i = 0; i < div.length; i++) {
        div[i].style.width = `${count[i]}px`
        div[i].style.backgroundColor = "#e696ff"
    }
}
    

function generateNumbers() {
    let item
    count.forEach(n=>{
        item = document.createElement('li')
        item.classList.add("list__item")
        item.textContent = n
        lista.appendChild(item)
    })

}

function rollsDice () {
for (let i = 0; i < numberField.value; i++) {
    if (numberField.value > 1000) {
        window.alert("Apenas até 1000!")
        break
    } else {
        let diceOne = diceNumbers()
    let diceTwo = diceNumbers()
    let sum = diceOne + diceTwo
        count[sum - 2] += 1  
    }
    }
    generateNumbers()
    generateGraphic()
}

const numberField = document.getElementById("field")
const button = document.getElementById("button")
const buttonReset = document.getElementById("button-reset")

numberField.addEventListener("input", function(){
    button.disabled = this.value.length >= 1 ? false : true
 })

button.addEventListener("click", rollsDice)

buttonReset.addEventListener("click", function() {
    lista.innerText = ""
    for(let i=0; i < div.length; i++){
        div[i].style.width = "0"
     }
    
     for (let i = 0; i < count.length; i++) {
        count[i] = 0;
         
     }
})