// Importa solo lo que necesitas de firebase/app
// import firebase from 'firebase';
import firebase from "firebase/compat/app"
import "firebase/compat/storage";
// import 'firebase-storage'; // Importa el módulo de almacenamiento si lo necesitas
// Configura tu objeto de configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBLTkqQCoE31ydNEbZOSZLDYRvZRHeRD6w",
    authDomain: "travelo-69d3a.firebaseapp.com",
    projectId: "travelo-69d3a",
    storageBucket: "travelo-69d3a.appspot.com",
    messagingSenderId: "945376240672",
    appId: "1:945376240672:web:4973b518d4354353b58845"
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