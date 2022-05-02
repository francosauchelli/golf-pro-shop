const crearListaFiltros = ( opciones ) => {

        const opcionesCategoria = [];
        const opcionesTalle = [];
        const opcionesCondicion = [];
        const opcionesMarca = [];
        const opcionesGenero = [];

        let opcionesFiltros = [];

        opciones.forEach( opcion => {

            const filtroCategoria = verificarFiltro( opcion.data().categoria, opcionesCategoria );
            filtroCategoria && ( opcionesCategoria.push( filtroCategoria ));

            const filtroTalle = verificarFiltro( opcion.data().talle, opcionesTalle );
            filtroTalle && ( opcionesTalle.push( filtroTalle ));

            const filtroCondicion = verificarFiltro( opcion.data().condicion, opcionesCondicion );
            filtroCondicion && ( opcionesCondicion.push( filtroCondicion ));

            const filtroMarca = verificarFiltro( opcion.data().marca, opcionesMarca );
            filtroMarca && ( opcionesMarca.push( filtroMarca ));

            const filtroGenero = verificarFiltro( opcion.data().genero, opcionesGenero );
            filtroGenero && ( opcionesGenero.push( filtroGenero ));
        })

        opcionesFiltros = [ opcionesCategoria,
                            opcionesTalle,
                            opcionesCondicion,
                            opcionesMarca,
                            opcionesGenero 
                        ]
        let i=0
        const arrayFiltros = [ 'categoria', 'talle', 'condicion', 'marca', 'genero' ]
        opcionesFiltros.forEach( filtro => {
            filtro.length > 0 &&
                crearMenuFiltro( filtro, arrayFiltros[ i ] );
            i++
        })
}

const verificarFiltro = ( opcion, opcionesCargadas ) => {

    const indexFiltro = opcionesCargadas.findIndex( el => el === opcion )

    if( indexFiltro === -1 ) {
        return opcion;        
    }
}

const filtroContainer = document.getElementsByClassName( 'filtros-container' );
const crearMenuFiltro = ( itemsFiltro, nombreFiltro ) => {

    const tituloFiltro = document.createElement( 'aside' );
    tituloFiltro.setAttribute( 'class', 'left_widgets p_filter_widgets' );

    tituloFiltro.innerHTML = `
        <div class="l_w_title">
            <h3 class="capitaliza-texto" >${ nombreFiltro }</h3>
        </div>
        <div class="widgets_inner"> 
            <ul class="${ nombreFiltro }-lista-items list">
            </ul>
        </div>
    `;

    filtroContainer[0].append( tituloFiltro )


    agregarItemsFiltro( itemsFiltro, nombreFiltro )
    
    

}

const agregarItemsFiltro = ( itemsFiltro, nombreFiltro ) => {

    const nodoFiltro = document.getElementsByClassName( `${ nombreFiltro }-lista-items`);

    const itemLista = document.createElement( 'li' );

    itemsFiltro.forEach( item => { 
        itemLista.innerHTML += `
            <p class="capitaliza-texto" >${ item }<p>
        `;
    });

    nodoFiltro.length>0 && ( nodoFiltro[0].append( itemLista ) );

}