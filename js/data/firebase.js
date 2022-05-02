// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
import { getFirestore,
        collection,
        getDocs,
        where,
        query } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyD7c9c_Zmc-m7ElCSraKz1-zSB3Km89vGE",
authDomain: "golf-pro-shop-af3f3.firebaseapp.com",
projectId: "golf-pro-shop-af3f3",
storageBucket: "golf-pro-shop-af3f3.appspot.com",
messagingSenderId: "565940182116",
appId: "1:565940182116:web:9d10cd2156cd3a14c2d371",
measurementId: "G-7R0SJ952S6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();

// función para obtener productos
export const obtenerProductos = () => {
    const products = getDocs( collection( db, 'productos' ));
    return products;
};

// función para obtener publicación destacada
export const obtenerNuevoDestacado = () => {
    const nuevoDestacado = getDocs( collection( db, 'nuevoDestacado' ));
    return nuevoDestacado;
}

export const obtenerPublicOferta = () => {
    const publicOferta = getDocs( collection( db, 'publicacionOferta' ));
    return publicOferta;
}

export const filtrarProductos = () => {
    const queryFirebase = query( collection( db, 'productos' ), where( 'genero', '==', 'femenino'))
    const productosFiltrados = getDocs( queryFirebase );
    return productosFiltrados;
}