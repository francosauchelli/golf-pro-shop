import { obtenerProductos,
        obtenerNuevoDestacado,
        obtenerPublicOferta
        } from './data/firebase.js';

window.addEventListener( 'DOMContentLoaded', async () => {
    
    const querySnapshot = await obtenerProductos();

    let prodDestacados = [];
    let productos = [];
    querySnapshot.forEach( doc => {
        // agregar productos formateados al array 'productos'
        productos.push( doc.data() );

        // ================= Productos Destacados ====================
        // agrega productos destacados
        if( doc.data().destacado && prodDestacados.length<=3 ) {
            prodDestacados.push( doc );
            cargarProductosDestacados( doc.data() );
        };
    })

    // esconde sección de productos destacados, si no hay nada para mostrar
    if( prodDestacados.length===0 ) {
        const seccionDestacados = document.getElementsByClassName( 'section-prods-destacados' );
        seccionDestacados[0].style.display = 'none';
    }
    // ================= Fin: Productos Destacados ====================


    // Productos Nuevos
    cargarProdsNuevos( productos );

    // Publicación destacada
    const queryNuevoDestacado = await obtenerNuevoDestacado();
    cargarNuevoDestacado( queryNuevoDestacado );

    // Publicación oferta
    const queryOferta = await obtenerPublicOferta();
    cargarPublicOferta( queryOferta );

    // productos main
    mostrarProductos( productos );
});