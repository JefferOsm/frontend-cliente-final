var cliente;

const cargarCliente= async(idUser)=>{
    const respuesta= await fetch(`http://localhost:3000/clientes/${idUser}`,{
        method: 'GET',

    })
    cliente= await respuesta.json();
    console.log("Categorias", cliente) ;
    
}