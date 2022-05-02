
const prodDestContainer = 
    document.getElementsByClassName('prods-dest-container');

const cargarProductosDestacados = ( data ) => {

    const { nombre, imagen, precio } = data;

    const contenedorTarjeta = document.createElement('div');
    contenedorTarjeta.setAttribute('class', 'col-lg-4 col-md-6');

    contenedorTarjeta.innerHTML = `
        <div class="single-product">
            <div class="producto-destacado-img product-img">
                <img class="img-fluid w-100" src="img/product/productos/${ imagen }" alt="img" />
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
                <!-- <del>$35.00</del> -->
            </div>
        </div>
    `;

    prodDestContainer[0].append( contenedorTarjeta );
}