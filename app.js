const btn = document.querySelector('.btn')
let numAdvice = document.getElementById('numAdvice')
let advice = document.querySelector('.advice')


btn.addEventListener('click', () => {getAdvice()})


function getAdvice() {

    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {

        numAdvice.innerText = data.slip.id
        advice.innerText = `"${data.slip.advice}"`

})
}

getAdvice()