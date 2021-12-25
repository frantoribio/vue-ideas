// Mi Plantilla genérica de Firebase v9
import { initializeApp } from 'firebase/app' // mejor que poner import firebase from 'firebase';

// Firebase y sus servicios
import { getFirestore, collection } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// import 'firebase/storage'

// Fichero de configuración de Firebase y lectura de las variables
import FirebaseConfig from './FirebaseConfig'

const firebaseConfig = FirebaseConfig

// Inicializar Firebase. Es opcional guardarlo en una constante, si lo hago es para imprimirlo o asegurar que funciona
const firebase = initializeApp(firebaseConfig)
// firebase.analytics();

// Elementos de Firebase a usar (Cargamos los que vayamos a usar)
const db = getFirestore() // Base de datos en tiempo real
const auth = getAuth() // Autenticación
// const storage = firebase.storage().ref(); // Almacenamiento

// Métodos de autentificación. Autenticación de Google, poner uno por método de identificación. Se debe eactivar en la consola de Firebase
const providerGoogle = new GoogleAuthProvider()

// usuario actual
const user = auth.currentUser

// Colecciones de documentos a usar
const ideasCollection = collection(db, 'vueideas-ideas')

// imprimimos el nombre del proyecto, esto espor depurar, luego quitar si se quiere
// console.log(`⚑ Firebase -> ${defaultProject.name} ✓`);

// Creamos los directorios para almacenar los ficheros
// const roomsStorage = storage.child('vuetalk').child('rooms');
// const urlStorage = firebase.storage();

// Exportamos lo que necesitemos
export default {
  // Elementos de firebase
  firebase, // Para algunas opciones como los metadatos
  db,
  auth,
  // Usuario actual
  user,
  // Proveedores de servicio para identificarse
  providerGoogle,
  // Colecciones
  // usersCollection,
  ideasCollection
  // Almacenamiento
  // roomsStorage,
  // Para la resolución inversa
  // urlStorage,

}
