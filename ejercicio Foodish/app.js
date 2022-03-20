const $ = (id) => document.getElementById(id)

/*
const biryani = async () =>{
const response = await fetch('https://foodish-api.herokuapp.com/api/images/biryani')
const data = await response.json()
$('img').src = data.image
}

biryani()

const burger = async () =>{
    const response = await fetch('https://foodish-api.herokuapp.com/api/images/burger')
    const data = await response.json()
    $('img').src = data.image
}
    
const dosa = async () =>{
    const response = await fetch('https://foodish-api.herokuapp.com/api/images/dosa')
    const data = await response.json()
    $('img').src = data.image
}
const idly = async () =>{
    const response = await fetch('https://foodish-api.herokuapp.com/api/images/idly')
    const data = await response.json()
    $('img').src = data.image
}
const pizza = async () =>{
    const response = await fetch('https://foodish-api.herokuapp.com/api/images/pizza')
    const data = await response.json()
    $('img').src = data.image
}
const all = async () =>{
    const response = await fetch('https://foodish-api.herokuapp.com/api')
    const data = await response.json()
    $('img').src = data.image
}
 */


const changeImage = async (url = "") =>{
 const response =  await fetch(`https://foodish-api.herokuapp.com/api${url?"/images/"+url:""}`)
 const data = await response.json()
$('img').src = data.image
}
 
changeImage()


$('btn-biryani').addEventListener('click',() =>changeImage('biryani'))
$('btn-burger').addEventListener('click',() =>changeImage('burger'))
$('btn-dosa').addEventListener('click', () =>changeImage('dosa'))
$('btn-idly').addEventListener('click', () =>changeImage('idly'))
$('btn-pizza').addEventListener('click', () =>changeImage('pizza'))
$('btn-all').addEventListener('click', () =>changeImage())
