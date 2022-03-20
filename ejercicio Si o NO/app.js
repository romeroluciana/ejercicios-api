const image = document.querySelector('#img')
const answer = document.querySelector('#res')
const btn = document.querySelector('#btn')

const changeAnswer= async() =>{
    const res = await fetch("https://yesno.wtf/api");
    const data = await res.json();

    img.src = data.image; 
    answer.innerHTML = data.answer
}

changeAnswer();

btn.addEventListener('click', changeAnswer)