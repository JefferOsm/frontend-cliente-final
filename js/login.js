let nombre
let idCliente

const comprobarCliente= async()=>{
    let email= document.getElementById('login-email').value;
    let password= document.getElementById('login-password').value;

    let cliente={
        email:email,
        pasword:password,
    }

    const resul= await fetch('http://localhost:3000/clientes/login',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    });
     const user=  await resul.json()

  
     if(user.error=="password incorrecto"){
        window.alert('Password o Email Incorrecto')
     }else{
        console.log(user,user.nombre);
        window.location.href="restaurants.html";
        nombre=user.nombre;
        idCliente=user._id;
        cargarCliente(user._id);
     }
   

}
console.log(nombre);