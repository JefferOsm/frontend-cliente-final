var restaurantes=[
    {
        id: 1,
        nombreRestaurante: 'Burger King',
        icono: 'img/logos/Burger_King_logo_(1999).svg.png',
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec metus commodo, convallis leo in.',
        calificacion: 4,
        categorias:[
            {
                nombreCategoria: 'Bebidas',
                tipos: 20,
                imagenCategoria:'img/categorias/Refrescos.webp',
                producto:[
                    {
                        nombreProducto: 'Coca Cola',
                        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec metus commodo, convallis leo in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec metus commodo, convallis leo in.',
                        precio: 200,
                        imgProducto:'img/producto/coca-cola.webp',
                    },
                    {
                        nombreProducto: 'Pepsi',
                        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec metus commodo, convallis leo in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec metus commodo, convallis leo in.',
                        precio: 400,
                        imgProducto:'img/producto/pepsi.webp',
                    },
                ],
            },
            {
                nombreCategoria: 'Hamburguesas',
                tipos: 30,
                imagenCategoria:'img/categorias/Hamburguesa.jpg',
                producto:[
                    {
                        nombreProducto: 'Whooper',
                        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec metus commodo, convallis leo in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec metus commodo, convallis leo in.',
                        precio: 300,
                        imgProducto:'img/producto/1.webp',
                    },
                    {
                        nombreProducto: 'Bacon King',
                        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec metus commodo, convallis leo in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec metus commodo, convallis leo in.',
                        precio: 400,
                        imgProducto:'img/producto/2.jpg',
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        nombreRestaurante: 'Bigos',
        icono: 'img/logos/bigos.png',
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec metus commodo, convallis leo in.',
        calificacion: 3,
        categorias:[
            {
                nombreCategoria: 'Bebidas',
                tipos: 20,
                imagenCategoria:'img/categorias/Refrescos.webp',
                producto:[
                    {
                        nombreProducto: 'Coca Cola',
                        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec metus commodo, convallis leo in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec metus commodo, convallis leo in.',
                        precio: 200,
                        imgProducto:'img/producto/coca-cola.webp',
                    },
                    {
                        nombreProducto: 'Pepsi',
                        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec metus commodo, convallis leo in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec metus commodo, convallis leo in.',
                        precio: 400,
                        imgProducto:'img/producto/pepsi.webp',
                    },
                ],
            },
            {
                nombreCategoria: 'Papas',
                tipos: 30,
                imagenCategoria:'img/categorias/Hamburguesa.jpg',
                producto:[
                    {
                        nombreProducto: 'Whooper',
                        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec metus commodo, convallis leo in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec metus commodo, convallis leo in.',
                        precio: 300,
                        imgProducto:'img/producto/1.webp',
                    },
                    {
                        nombreProducto: 'Bacon King',
                        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec metus commodo, convallis leo in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec metus commodo, convallis leo in.',
                        precio: 400,
                        imgProducto:'img/producto/2.jpg',
                    },
                ],
            },
        ],
    },
];

function generarRestaurantes(){
    //LIMPIAR
    document.getElementById('restaurantes').innerHTML= '';
    document.getElementById('contenedor-categorias').style.display='none';
    document.getElementById('contenedorProductos').style.display='none';
    document.getElementById('contenedor-detalle').style.display='none';
    restaurantes.forEach(function(rest, i){
        let estrellas= '';
        for(let i=0; i<rest.calificacion; i++){
            estrellas+= ' <i class="fa-solid fa-star"></i>';
        }
        for(let i=0; i<(5-rest.calificacion); i++){
            estrellas+= '<i class="fa-regular fa-star"></i>';
        }

        document.getElementById('restaurantes').innerHTML += 
        ` <div class="tarjeta sombra">
        <img class="tarjeta-logo sombra" src="${rest.icono}" alt="Burger King">
        <div class="descripcion">
            <div class="descripcion-nombre">${rest.nombreRestaurante}</div>
            <div class="estrellas my-2">
                ${estrellas}
                <br>
            </div>
            <btn onclick="generarCategorias('${i}')" ><i class="fa-solid fa-circle-right"></i></btn>
        </div>
    </div>`;

    });

}

generarRestaurantes()


function generarCategorias(indice){
    //Limpiar Restaurantes
    document.getElementById('restaurantes').style.display='none';
    document.getElementById('restaurantes-nav').style.display='none';
    document.getElementById('restaurantes-text').style.display='none';
    document.getElementById('contenedorProductos').style.display='none';
    document.getElementById('contenedorProductos').innerHTML='';
    document.getElementById('categorias').innerHTML='';
    document.getElementById('contenedor-detalle').style.display='none';


    document.getElementById('logoCategoria').innerHTML+=` <img class="restaurante-logo" src="${restaurantes[indice].icono}" alt="Logo">`;
    document.getElementById('contenedor-categorias').style.display='block';
    restaurantes[indice].categorias.forEach(function(cat, i){
        document.getElementById('categorias').innerHTML+=
        ` <div class="categoria-tarjeta sombra">
        <div> <img  class="categoria-tarteja-img sombra" src="${cat.imagenCategoria}" alt=""> </div>
        <div class="categoria-tarjeta-texto">
            <div class="categoria-textoDescripcion">
                <h3>${cat.nombreCategoria}</h3>
                <p>${cat.tipos} Tipos</p>
            </div>
            <div class="categoria-siguiente"><btn onclick="generarProductos('${indice}','${i}')"><i class="fa-solid fa-circle-right"></i></btn></div>
        </div>
    </div>`;
    });
}


function generarProductos(rest, cat){
    let productos= restaurantes[rest].categorias[cat];
    console.log(productos.producto);
    //LIMPIAR
    document.getElementById('contenedor-categorias').style.display='none';
    document.getElementById('restaurantes').style.display='none';
    document.getElementById('restaurantes-text').style.display='none';
    document.getElementById('contenedorProductos').style.display='none';
    document.getElementById('contenedor-detalle').style.display='none';
    //CARGAR NAV
    document.getElementById('restaurantes-nav').style.display='block';
    document.getElementById('restaurantes-nav').innerHTML='';
    document.getElementById('restaurantes-nav').innerHTML+=
    `<div><btn onclick="generarCategorias('${cat}')"   style="color:#CC7952 ;"><i class="fa-solid fa-circle-arrow-left"></i></btn></div>
    <div style="color:black ;">${productos.nombreCategoria}</div>
    <button type="button" class="btn btn-cart" data-bs-toggle="modal" data-bs-target="#modal-carrito"><i class="fa-solid fa-cart-shopping" ></i></button>`;
    document.getElementById('restaurantes-nav').style.display='flex';
    //RENDERIZAR
    document.getElementById('contenedorProductos').style.display='block';
    productos.producto.forEach(function(prod, i){
        document.getElementById('contenedorProductos').innerHTML+=
        ` <div class="producto-tarjeta">
            <div class="producto-detalle">
                <div class="producto-nombre">${prod.nombreProducto}</div>
                <div class="producto-precio">L.${prod.precio}</div>
            </div>
            <div ><a onclick="generarDetalleProducto('${rest}','${cat}','${i}')"><img class="producto-imagen" src="${prod.imgProducto}" alt="..."></a></div>
         </div>`;

    });


}

function generarDetalleProducto(empresa, categoria,prod){
    let detalle= restaurantes[empresa].categorias[categoria].producto[prod];
    console.log(detalle.descripcion);
    //LIMPIAR
    document.getElementById('contenedor-categorias').style.display='none';
    document.getElementById('restaurantes').style.display='none';
    document.getElementById('restaurantes-text').style.display='none';
    document.getElementById('contenedorProductos').style.display='none';
    document.getElementById('contenedorProductos').innerHTML='';
    //CARGAR NAV
    document.getElementById('contenedor-detalle').style.display='block';
    document.getElementById('contenedor-detalle').innerHTML='';
    document.getElementById('restaurantes-nav').style.display='block';
    document.getElementById('restaurantes-nav').innerHTML='';
    document.getElementById('restaurantes-nav').innerHTML+=
    `<div><btn onclick="generarProductos('${empresa}','${categoria}')"   style="color:#CC7952 ;"><i class="fa-solid fa-circle-arrow-left"></i></btn></div>
    <div style="color:black ;">${restaurantes[empresa].categorias[categoria].nombreCategoria}</div>
    <button type="button" class="btn btn-cart" data-bs-toggle="modal" data-bs-target="#modal-carrito"><i class="fa-solid fa-cart-shopping" ></i></button>`;
    document.getElementById('restaurantes-nav').style.display='flex';

        //Generar Detalle
    document.getElementById('contenedor-detalle').innerHTML+=
    `<img class="producto-d-img" src="${detalle.imgProducto}" alt="...">
    <h2 class="my-3">${detalle.nombreProducto}</h2>
    <p class="detalle-descripcion">${detalle.descripcion}</p>
    
    <div class="detalle-formulario">
        <div class="detalle-cantidad">
            <h3>Cantidad</h3>
            <input type="number" class="form-control form-control-sm detalle-cantidad-n">
        </div>
        
        <h2 class="detalle-precio">L.${detalle.precio}</h2>
    </div>

    <div class="contenedor-botones ">
    <button class="detalle-btn btn">Comprar Ahora</button>
    <button class="detalle-btn btn" >Agregar al Carrito</button>
    </div>
`;



}



