import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import firebase from "firebase";

Vue.use(ElementUI);

firebase.initializeApp({
    apiKey: "AIzaSyAnSfeF02nqwBaHs-fwflwLJ5oJC01Mkr8",
    authDomain: "fireblogsys.firebaseapp.com",
    projectId: "fireblogsys",
    storageBucket: "fireblogsys.appspot.com",
    messagingSenderId: "447748915790",
    appId: "1:447748915790:web:70441c9b66b3e9b121391f"
})

const app = new Vue({
    el: '#app',
    components: { App }
});
 
