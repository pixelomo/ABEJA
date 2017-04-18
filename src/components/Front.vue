<template>
  <div>
    <md-card>
      <md-card-content>
        <md-input-container v-if="gridView" class="search">
          <label>Search</label>
         <md-input @keyup.native="search"></md-input>
        </md-input-container>
      </md-card-content>
      <md-card-content v-if="gridView" class="grid">
            <md-card md-with-hover class="card" v-for="item in items" :key="item.id">
              <md-card-area md-inset>
                <md-card-media md-ratio="16:9">
                  <img v-on:click="singleView(item)" v-bind:src="item.img" v-bind:alt="item.title">
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
      <md-card-content v-else class="single">
            <md-card md-with-hover class="card">
              <md-card-area md-inset>
                <md-button class="md-primary md-raised has-ripple backTo">
                  <span v-on:click="grid">Back to search results</span>
                </md-button>
                <md-card-header>
                  <h2 class="md-title">{{single.title}}</h2>
                </md-card-header>
                <img v-bind:src="single.img" v-bind:alt="single.title">
                <p>{{single.desc}}</p>
                <md-card-header>
                  <div class="md-subhead">
                    <p class="yen"><span >¥</span>{{single.price}}</p>
                    <md-button class="md-primary md-raised has-ripple addToCart">
                      <span v-on:click="addToCart(item)">Add to Cart</span>
                    </md-button>
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
      items: [
        {title: 'Google Pixel', img: require('../assets/pixel.png'), id: 1, price: 3800, added: false, desc: "Meet Pixel. Possibilities by you. Phone by Google. The power of Google, at your fingertips. Every touch, every interaction, every moment – made easy. Features a 5-inch Full HD display, top quality 12.3MP camera, and unlimited storage for all your photos and videos."},
        {title: 'Samsung Galaxy S8', img: require('../assets/s7.png'), id: 2, price: 4200, added: false, desc: "Introducing the stunning Infinity Display, The revolutionary design of the Galaxy S8 and S8+ begins from the inside out. We rethought every part of the phone's layout to break through the confines of the smartphone screen. So all you see is pure content and no bezel. It's the biggest, most immersive screen on a Galaxy smartphone of this size. And it's easy to hold in one hand."},
        {title: 'iPhone 7', img: require('../assets/iphone.png'), id: 3, price: 5000, added: false, desc: "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colourful iPhone display. Splash and water resistance.1 And it looks every bit as powerful as it is. This is iPhone 7."},
        {title: 'Nexus 5X', img: require('../assets/nexus.png'), id: 4, price: 2200, added: false, desc: "Hitting the sweet spot. Capturing the soul of the Nexus family, the 5X offers top-line performance in a compact, lightweight device that's ready to go anywhere, any time. Beneath the 5.2-inch display is a hexa-core Snapdragon 808 processor for world-class speed at an affordable price."},
        {title: 'Motorola Z', img: require('../assets/motorola.png'), id: 5, price: 1800, added: false, desc: "Unlimited possibilities. Transform your Moto Z in Moto Maker by selecting front and body colors and an array of Moto Mods. With Moto Mods, your phone instantly becomes a movie projector, a boombox, a battery powerhouse, and more."},
        {title: 'HTC Ultra', img: require('../assets/htc.png'), id: 6, price: 3500, added: false, desc: "Meet HTC U Ultra. The big screen 5.7” phone made for the brilliant U. It reflects U beautifully with its sophisticated new liquid surface. It puts U on top, courtesy of a convenient new Dual Display. It listens to U, adapting sound to your unique hearing. It even learns from U, becoming a companion that evolves to get to know you better over time."},
        {title: 'Huawei P10', img: require('../assets/huawei.png'), id: 7, price: 2700, added: false, desc: "The P10 is Huawei’s finest smartphone to date with a powerful dual lens, co engineered by camera experts, Leica. Change the way the world sees you, through the lens of the HUAWEI P10. Redefine modern portraiture."},
        {title: 'Sony Xperia', img: require('../assets/sony.png'), id: 8, price: 3200, added: false, desc: "Our new crown jewel. Xperia XZ perfects the fundamentals of a great smartphone. Packed with innovations in technology, it boasts a photo-pro’s camera, an intelligent battery and smart features that adapt to you. And it’s all delivered in a stunning, evolved design."},
        {title: 'LG G6', img: require('../assets/lg.png'), id: 9, price: 3000, added: false, desc: "Next Generation of Design. Seamless Design with Refined Build. FullVision display with narrow bezel in premium metal and glass body elevates LG G6 into the next generation of smartphone design."}
      ],
      gridView: true,
      single: {title: '', img: '', id: 0, price: 0, added: false}
    }
  },
  methods: {
    addToCart: function (e) {
        orderRef.push(e);
        e.added = true;
    },
    search: function (e) {
      console.log(e.target.value)
    },
    singleView: function (e) {
      console.log(e);
      this.gridView = false;
      this.single.title = e.title;
      this.single.img = e.img;
      this.single.id = e.id;
      this.single.price = e.price;
      this.single.desc = e.desc;
    },
    grid: function () {
      this.gridView = true;
    }
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
.md-theme-default.md-input-container.md-input-focused input, .md-theme-default.md-input-container.md-input-focused label{
  color: crimson;
}
.md-theme-default.md-input-container.md-input-focused:after{
  background-color: crimson;
}
.search{
  max-width: 1068px;
  margin: 0 auto;
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
.single img{
  margin: 50px;
}
.single p{
  margin: 0 30px 30px;
  font-size: 20px;
  line-height: 1.3;
}
.md-button.backTo{
  margin: 0 0 40px;
  line-height: 4.3;
  padding: 30px;
}
.md-button.backTo span{
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
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
