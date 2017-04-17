<template>
  <div class="hero">
    <md-card>
      <md-card-header>
        <h1 class="md-title"><img src="../assets/abeja_logo.png">{{title}}</h1>
      </md-card-header>
      <md-card-content class="grid">
        <!-- <input type="text" v-on:keyup="search" placeholder="Search"> -->
        <!-- <md-input-container>
          <label>Search</label>
          <md-input v-model="initialValue"></md-input>
        </md-input-container> -->


            <md-card md-with-hover class="card" v-for="item in items" :key="item.id">
              <md-card-area md-inset>
                <md-card-media md-ratio="16:9">
                  <img v-bind:src="item.img" v-bind:alt="item.title">
                </md-card-media>
                <md-card-header>
                  <h2 class="md-title">{{item.title}}</h2>
                  <div class="md-subhead">
                    <p class="yen"><span >¥</span>{{item.price}}</p>
                    <md-button class="md-primary md-raised has-ripple addToCart">
                      <span v-on:click="addToCart(item)">Select</span>
                    </md-button>
                    <!-- <form v-on:submit.prevent="addToCart(item)">
                        <input type="text" v-model="item.title" >
                        <input type="text" v-model="item.img" value="item.img">
                        <input type="text" v-model="item.id" value="item.id">
                        <input type="text" v-model="item.price" value="item.price">
                        <input type="submit" value="Add to Cart">
                    </form> -->
                  </div>
                </md-card-header>
              </md-card-area>
            </md-card>

      </md-card-content>
      <md-button class="md-primary md-raised has-ripple checkout">
       <router-link to='/cart'>Proceed To Checkout</router-link>
      </md-button>
    </md-card>
  </div>
</template>

<script>

let baseURL = 'https://abeja-95284.firebaseio.com/';

import Firebase from 'firebase'

let db = Firebase.database();
let orderRef = db.ref('orders');


export default {
  name: 'front',
  firebase: {
    orders: orderRef
  },
  data () {
    return {
      title: 'Welcome to the ABEJA Store',
      showName: true,
      items: [
        {title: 'Google Pixel', img: require('../assets/pixel.png'), id: 1, price: 3000},
        {title: 'Samsung Galaxy S8', img: require('../assets/s7.png'), id: 2, price: 2500},
        {title: 'iPhone 7', img: require('../assets/iphone.png'), id: 3, price: 5000},
        {title: 'Nexus 5X', img: require('../assets/nexus.png'), id: 4, price: 2200},
        {title: 'Motorola Z', img: require('../assets/motorola.png'), id: 5, price: 1800},
        {title: 'HTC Ultra', img: require('../assets/htc.png'), id: 6, price: 3500},
        {title: 'Huawei P10', img: require('../assets/huawei.png'), id: 7, price: 2700},
        {title: 'Sony Xperia', img: require('../assets/sony.png'), id: 8, price: 3200},
        {title: 'LG G5', img: require('../assets/lg.png'), id: 9, price: 3000}
      ],
      newOrder: {
        title: '',
        img: '',
        id: 0,
        price: 0
      }
    }
  },
  methods: {
    addToCart: function (e) {
      console.log(e.title);
      console.log(e.img);
      console.log(e.id);
      console.log(e.price);
        orderRef.push(this.newOrder);
        this.newOrder.title = '';
        this.newOrder.img = '';
        this.newOrder.id = 0;
        this.newOrder.price = 0;
    },
    search: function (e) {
      console.log(e.target.value)
    }
  },
  computed: {
    
  }
}

</script>

<style scoped>
.md-card .md-card-header{
  background: crimson;
  color: #fff;
}
h1 img{
  width: 150px;
  margin-right: 30px;
  padding: 10px;
}
.grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
@media (max-width: 850px){
  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 450px){
  .grid{
    display: grid;
    grid-template-columns: 1fr;
  }
}
@media (min-width: 1200px){
  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
.md-card .md-card-header:last-child{
  margin-bottom: 0;
}
.md-card .md-card-media.md-16-9 {
    height: 550px;
}
.md-card .md-subhead{
  opacity: 1;
}
.md-theme-default.md-button:not([disabled]).md-primary.md-raised, .md-theme-default.md-button:not([disabled]).md-primary.md-fab {
    background-color: white;
    color: crimson;
    width: 100%;
}
.md-theme-default.md-button:not([disabled]).md-primary.md-raised:hover, .md-theme-default.md-button:not([disabled]).md-primary.md-fab:hover {
    background-color: #404040;
    color: #fff;
}
.yen{
  font-size: 24px;
}
.addToCart span{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  &:hover{
    cursor: pointer;
  }
}
.checkout{
  display: block;
  margin: 20px auto;
  padding: 20px;
}

</style>
