const nuevoDestacContainer = 
    document.getElementsByClassName('productos-nuevos');

const cargarNuevoDestacado = ( nuevoDestacado ) => {

    nuevoDestacado.forEach( prod => {
        return { seccion, titulo, imagen } = prod.data();
    })

    const contNuevoDest = document.createElement('div');
    contNuevoDest.setAttribute('class', 'col-lg-6');
    
    contNuevoDest.innerHTML = `
        <div class="new_product">
            <h5 class="text-uppercase">${ seccion }</h5>
            <h3 class="text-uppercase">${ titulo }</h3>
            <div class="product-img">
                <img class="img-fluid" src="img/product/publicaciones/${ imagen }" alt="img" />
            </div>
            <a href="#" class="main_btn">Comprá Ahora</a>
        </div>
    `;
    nuevoDestacContainer[0].prepend( contNuevoDest );
}

