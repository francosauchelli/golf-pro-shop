const prodNvosContainer = 
    document.getElementsByClassName('tarjetas-prods-nuevos');

const cargarProdsNuevos = ( productos ) => {

    const prodsOrdenados = productos.sort( ( a, b ) => {
        return b.registrado - a.registrado;
    })
    
    for( let i=0; i<=3; i++ ) {

        const { nombre, precio, imagen } = prodsOrdenados[ i ];

        const contenedorTarjeta = document.createElement('div');
        contenedorTarjeta.setAttribute('class', 'col-lg-6 col-md-6');
        
        contenedorTarjeta.innerHTML = `
            <div class="single-product">
                <div class="product-img">
                    <img class="img-fluid w-100" src="img/product/productos/${ imagen }" alt="" />
                    <div class="p_icon">
                        <a href="#">
                            <i class="ti-eye"></i>
                        </a>
                        <a href="#">
                            <i class="ti-heart"></i>
                        </a>
                        <a href="#">
                            <i class="ti-shopping-cart"></i>
                        </a>
                    </div>
                </div>
                <div class="product-btm">
                    <a href="#" class="d-block">
                        <h4>${ nombre }</h4>
                    </a>
                    <div class="mt-3">
                        <span class="mr-4">$${ precio }</span>
                        <del>$35.00</del>
                    </div>
                </div>
            </div>
    
        `;
        prodNvosContainer[0].append( contenedorTarjeta );
    }


}   