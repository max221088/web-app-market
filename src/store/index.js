import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDoc, getDocs, collection, doc, getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const app = initializeApp ({
  apiKey: "AIzaSyBWsge-mQ8njg73iAV0iLyCn_-WiCc6ZUI",
  authDomain: "notes-3da43.firebaseapp.com",
  projectId: "notes-3da43",
  storageBucket: "notes-3da43.appspot.com",
  messagingSenderId: "626553317607",
  appId: "1:626553317607:web:a4fba69930cba67cc29a42"
});

// Initialize Firebase
const DB = getFirestore(app);

function getDocFromDB (products, colID) {
  return getDoc(doc(DB, products, colID));
}

function getCollectionFromDB (colID) {
  return getDocs(collection(DB, colID))
}

// getDoc(doc(DB, 'Products', '1234567676767'))
//   .then(data => {
//     console.log(data.data());
//   });
//   getDocs(collection(DB, 'Products'))
//     .then(data => {
//       let collectProd = [];
//       data.forEach(item => {
//         collectProd.push(item.data());
//       });
//       console.log(collectProd);
//     })

export default new Vuex.Store({
  state: {
    products: [],
    productsFromDB: [],
    categories: [],

  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getCategories(state) {
      return state.categories;
    },
  },
  actions: {
    fetchCategories(context) {
      getCollectionFromDB('Category')
        .then(data => {
          context.state.productsFromDB = [];
           data.forEach(list => {
            context.state.categories.push(list.data());
        });
      })
    }, 
    fetchProducts (context) {
      getCollectionFromDB('Products')
        .then(data => {
          context.state.productsFromDB = [];
           data.forEach(list => {
            context.state.products.push(list.data());
        });
      })
    },
    fetchProductsById (context, ID) {
      return getDocFromDB ('Products', ID);
    }
  },
  
})
