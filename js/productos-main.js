const prodsMainContainer = 
    document.getElementsByClassName( 'prods-main-container' );

const mostrarProductos = ( productos ) => {
    
    for ( let i=0; i<8; i++ ) {
        
        const { nombre, precio, imagen } = productos[ i ];

        const tarjetaProducto = document.createElement('div');
        tarjetaProducto.setAttribute('class', 'col-lg-3 col-md-6');
        
        tarjetaProducto.innerHTML = `
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
        prodsMainContainer[0].prepend( tarjetaProducto );
    }
}