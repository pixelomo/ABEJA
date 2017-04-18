<template>
  <div class="hero">
    <md-card>
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
                      <span v-on:click="addToCart(item)">Add to Cart</span>
                    </md-button>
                  </div>
                </md-card-header>
              </md-card-area>
              <md-card-area v-if="item.added" class="added">
                <div>
                  <h3>Added To Cart</h3>
                  <img src="../assets/tick.svg" alt="added">
                </div>
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
      items: [
        {title: 'Google Pixel', img: require('../assets/pixel.png'), id: 1, price: 3800, added: false},
        {title: 'Samsung Galaxy S8', img: require('../assets/s7.png'), id: 2, price: 4200, added: false},
        {title: 'iPhone 7', img: require('../assets/iphone.png'), id: 3, price: 5000, added: false},
        {title: 'Nexus 5X', img: require('../assets/nexus.png'), id: 4, price: 2200, added: false},
        {title: 'Motorola Z', img: require('../assets/motorola.png'), id: 5, price: 1800, added: false},
        {title: 'HTC Ultra', img: require('../assets/htc.png'), id: 6, price: 3500, added: false},
        {title: 'Huawei P10', img: require('../assets/huawei.png'), id: 7, price: 2700, added: false},
        {title: 'Sony Xperia', img: require('../assets/sony.png'), id: 8, price: 3200, added: false},
        {title: 'LG G5', img: require('../assets/lg.png'), id: 9, price: 3000, added: false}
      ]
    }
  },
  methods: {
    addToCart: function (e) {
        orderRef.push(e);
        e.added = true;
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

.grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
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
.md-theme-default.md-button:not([disabled]).md-primary.md-raised a{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.md-theme-default.md-button:not([disabled]).md-primary.md-raised:hover, .md-theme-default.md-button:not([disabled]).md-primary.md-fab:hover {
    background-color: #2c3e50;
}
.md-theme-default.md-button:not([disabled]).md-primary.md-raised:hover a{
  color: #fff;
}
.md-theme-default.md-card{
  border-radius: 0;
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
.md-card .md-card-area.added{
  position: absolute;
  width: 100%;
  background: rgba(0,0,0,0.5);
  top: 0;
  left: 0;
  line-height: 6;
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  height: 100%;
}
.md-card .md-card-area.added img{
  width: 200px;
}
.checkout{
  display: block;
  margin: 20px auto;
  padding: 40px;
  line-height: 6;
}

</style>
