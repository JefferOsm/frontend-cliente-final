// var nombre;
// var idCliente;
var pedidos=[];

const registrarCliente= async()=>{
    nombre=document.getElementById('nombre').value;
    let telefono=document.getElementById('telefono').value;
    let email= document.getElementById('email').value;
    let password= document.getElementById('password').value;

    let cliente={
        nombre: nombre,
        telefono: telefono,
        email:email,
        pasword:password,
        ordenes:pedidos
    }

    const resul= await fetch('http://localhost:3000/clientes/register',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    });
     const user=  await resul.json()
     console.log(user);
     nombre=user.nombre;
     idCliente=user._id;
     window.location.href="restaurants.html";
     
}
