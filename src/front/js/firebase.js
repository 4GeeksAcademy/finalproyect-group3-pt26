// Importa solo lo que necesitas de firebase/app
// import firebase from 'firebase';
import firebase from "firebase/compat/app"
import "firebase/compat/storage";
// import 'firebase-storage'; // Importa el módulo de almacenamiento si lo necesitas
// Configura tu objeto de configuración de Firebase
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
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