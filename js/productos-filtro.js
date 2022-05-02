import { filtrarProductos } from './data/firebase.js';


window.addEventListener( 'DOMContentLoaded', async () => {
    
    const querySnapshot = await filtrarProductos();

    mostrarProductosFiltro( querySnapshot );


    crearListaFiltros( querySnapshot );
    
})



const prodFiltroContainer = 
    document.getElementsByClassName( 'prods-filtro' );

const mostrarProductosFiltro = ( productos ) => {
    
    productos.forEach( prod => {
        const { nombre, precio, imagen } = prod.data();
        
        const tarjetaProdFiltro = document.createElement('div');
        tarjetaProdFiltro.setAttribute('class', 'col-lg-4 col-md-6');
        
        tarjetaProdFiltro.innerHTML = `
            <div class="single-product">
                <div class="product-img">
                    <img
                    class="card-img"
                    src="img/product/productos/${ imagen }"
                    alt=""
                    />
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
        prodFiltroContainer[0].prepend( tarjetaProdFiltro );
    })
}


