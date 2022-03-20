const container = document.getElementById("container");
const modal = document.getElementById("modal");
const close = document.getElementById("close");
const deleteModal = document.getElementById("deleteModal");
const closeDelete = document.getElementById("closeDelete");
const commentaries = document.getElementById("commentaries");
const $ = (id) => document.getElementById(id)


const showModal = () =>{
  modal.classList.add("is-visible");
}
const closeModal = () =>{
 modal.classList.remove("is-visible");
}

const showModalDelete = (id) =>{
  deleteModal.classList.add("is-visible");
}
const closeModalDelete = (id) =>{
  deleteModal.classList.remove("is-visible");
}

const showModalEditar = (id) =>{
  $('modal-edit').classList.add("is-visible");
  mostrarDatosEditados(id)
}
const closeModalEditar = () =>{
  $('modal-edit').classList.remove("is-visible");
}


close.addEventListener("click",closeModal);
closeDelete.addEventListener("click",closeModalDelete);

window.addEventListener("click",(event) => {
  if (event.target == modal) {
    closeModal();
  }
  if (event.target == modal) {
    closeModal();
  }
});

const openModal= ()=>  {
  showModal();
};

const openModalDelete= (id)=>  {
  showModalDelete();
  $('idInputEliminar').value = id
};

myBtn.addEventListener("click",openModal);




$('close').addEventListener('click', ()=>{
  closeModal()
})


// ASYNC

let informacion;
const renderTabla = async()=>{
  const response = await fetch("https://622a7e0014ccb950d21d9ed4.mockapi.io/api/alquileres/users")
const data = await response.json()
const infoTabla =  data.reduce((acc, dat) => {
  return `${acc}
  <tr>
  <td>${dat.nombre}</td>
  <td>${dat.apellido}</td>
  <td>${dat.email}</td>
  <td>${dat.edad}</td>
  <td>${dat.pago}</td>
  <td>${dat.saldo}</td>
  <td>
    <span class="action btn-edit" onclick="showModalEditar(${dat.id})">
      <i class="fas fa-edit"></i>
    </span>
    <span class="action btn-delete" onclick="openModalDelete(${dat.id})">
      <i class="fas fa-trash"></i>
    </span>
  </td>
</tr>
`;
}, '');

$('tabla').innerHTML = infoTabla;
informacion = data;
}


renderTabla()


const agregarUsuario = async() =>{
 
 const response = await fetch(`https://622a7e0014ccb950d21d9ed4.mockapi.io/api/alquileres/users`
  , {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre:$('nombreInputAgregar').value,
        apellido: $('apellidoInputAgregar').value,
        email:$('emailInputAgregar').value,
        edad:$('edadInputAgregar').value,
        pago:$('pagoInputAgregar').value,
        saldo:$('saldoInputAgregar').value,
      }), 
    })
     const  data = await response.json()
     renderTabla()
}


$('btn-save').addEventListener('click', ()=>{
  agregarUsuario()
   closeModal()
} 
)


//MOSTRAR EN EL MODAL LOS DATOS DE LOS INPUTS
const mostrarDatosEditados = async(id)=>{
  const response = await fetch(`https://622a7e0014ccb950d21d9ed4.mockapi.io/api/alquileres/users/${id}`)
  const  data = await response.json()
  $('nombreInputEditar').value = data.nombre
  $('apellidoInputEditar').value= data.apellido
  $('emailInputEditar').value = data.email
  $('edadInputEditar').value = data.edad
  $('pagoInputEditar').value = data.pago
  $('saldoInputEditar').value = data.saldo
  $('idInputEditar').value = data.id

}

//GUARDAR LA INFORMACION EDITADA EN LA API
const editarUsuario = async() =>{
  const id = $('idInputEditar').value
  const response = await fetch(`https://622a7e0014ccb950d21d9ed4.mockapi.io/api/alquileres/users/${id}`
   , {
       method: 'PUT', 
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         nombre:$('nombreInputEditar').value,
         apellido: $('apellidoInputEditar').value,
         email:$('emailInputEditar').value,
         edad:$('edadInputEditar').value,
         pago:$('pagoInputEditar').value,
         saldo:$('saldoInputEditar').value,
       }), 
     })
      const  data = await response.json()
      renderTabla()
 }
 
 $('btn-edit-save').addEventListener('click', ()=>{
  editarUsuario()
  closeModalEditar()
 })


 const eliminarUsuario = async()=>{
   const id = $('idInputEliminar').value
   console.log(id);
    const response = await fetch(`https://622a7e0014ccb950d21d9ed4.mockapi.io/api/alquileres/users/${id}`
    , {
        method: 'DELETE'})
    
    const  data = await response.json()
    renderTabla()

 }

 $('btn-eliminar').addEventListener('click',()=>{
  eliminarUsuario()
  closeModalDelete()
 })

 
// let informacion;
// const renderTabla = ()=>{
//   fetch("https://622a7e0014ccb950d21d9ed4.mockapi.io/api/alquileres/users")
// .then(response=>response.json())
// .then(data =>{
// const infoTabla =  data.reduce((acc, dat) => {
//   return `${acc}
//   <tr>
//   <td>${dat.nombre}</td>
//   <td>${dat.apellido}</td>
//   <td>${dat.email}</td>
//   <td>${dat.edad}</td>
//   <td>${dat.pago}</td>
//   <td>${dat.saldo}</td>
//   <td>
//     <span class="action">
//       <i class="fas fa-edit"></i>
//     </span>
//     <span class="action" onclick="openModalDelete()">
//       <i class="fas fa-trash"></i>
//     </span>
//   </td>
// </tr>
// `;
// }, '');

// $('tabla').innerHTML = infoTabla;
// informacion = data;
// })

// }
// renderTabla()

// const agregarUsuario = () =>{
 
//   fetch(`https://622a7e0014ccb950d21d9ed4.mockapi.io/api/alquileres/users`
//   , {
//       method: 'POST', 
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         nombre:$('nombreInputAgregar').value,
//         apellido: $('apellidoInputAgregar').value,
//         email:$('emailInputAgregar').value,
//         edad:$('edadInputAgregar').value,
//         pago:$('pagoInputAgregar').value,
//         saldo:$('saldoInputAgregar').value,
//       }), 
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         renderTabla()
//       });
// }



//$('btn-save').addEventListener('click', agregarUsuario)

