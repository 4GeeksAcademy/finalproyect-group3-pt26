// Importa solo lo que necesitas de firebase/app
// import firebase from 'firebase';
import firebase from "firebase/compat/app"
import "firebase/compat/storage";
// import 'firebase-storage'; // Importa el módulo de almacenamiento si lo necesitas
// Configura tu objeto de configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAnv-fPVNZgACM_J346PYxmUAhPrlU3qXw",
    authDomain: "travelo-e189a.firebaseapp.com",
    projectId: "travelo-e189a",
    storageBucket: "travelo-e189a.appspot.com",
    messagingSenderId: "360896695546",
    appId: "1:360896695546:web:283972c63cc0dd5bab4d43",
    measurementId: "G-BZEEJXRXDZ"
};
// Inicializa Firebase si aún no está inicializado
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// Obtiene una referencia al servicio de almacenamiento de Firebase
const storage = firebase.storage();
// Exporta el objeto firebase y/o los módulos que necesites
// export { firebase };
export { firebase, storage };