const container = document.getElementById("container");
const modal = document.getElementById("myModal");
const span = document.getElementById("close");
const commentaries = document.getElementById("commentaries");

const showModal = () => {
  modal.classList.add("is-visible");
};
const closeModal = () => {
  modal.classList.remove("is-visible");
};

span.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    closeModal();
  }
});


const getDogs = async()=>{
  const response = await fetch('http://my-json-server.typicode.com/matiasbenary/dbJsonDogs/dogs')
  return await response.json() 
}
const getComments = async()=>{
  const response = await fetch('http://my-json-server.typicode.com/matiasbenary/dbJsonDogs/comments')
  return await response.json() 
}


const renderHtml= (dogs) =>{
    const mostrarCards = document.querySelector('#container')
    mostrarCards.innerHTML = dogs.reduce((acc, dog) =>{
        return ( 
            acc +
            `
              <div class="card" onclick="openModal(${dog.id})">
                <img src=${dog.img} alt="">
                <h2>${dog.name}</h2>
                <div class="card__footer"><i class="fas fa-paw"></i>${dog.like}</div>
              </div>
           
            `
        )
        
        }, "")      
 }

 const openModal = (id) => {
  showModal();
};

const renderCards = async () =>{
  const dogs = await getDogs()
  renderHtml(dogs)
}


renderCards()