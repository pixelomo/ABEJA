<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

let baseURL = 'https://abeja-95284.firebaseio.com/';

import Firebase from 'firebase'

let config = {
  apiKey: "AIzaSyBqjJYOs2jzZ6sIu7K2d1jxyqDBd-eJbo0",
  authDomain: "abeja-95284.firebaseapp.com",
  databaseURL: "https://abeja-95284.firebaseio.com",
  projectId: "abeja-95284",
  storageBucket: "abeja-95284.appspot.com",
  messagingSenderId: "50000694496"
}

let app = Firebase.initializeApp(config);
let db = Firebase.database();
let orderRef = db.ref('orders');

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav li a.md-list-item-container{
  justify-content: space-around;
}
</style>
