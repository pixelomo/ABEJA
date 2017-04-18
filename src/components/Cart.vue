<template>
	<div class="cart">
		<h1>Your Order</h1>
    <md-card>
      <md-card-content>
             <md-list class="order">
                 <md-list-item class="md-accent" v-for="order in orders" :key="order.id">
                   <div>
                      <img v-bind:src="order.img" v-bind:alt="order.title">
                      <h3>{{order.title}} </h3>
                      <span>¥{{order.price}}</span> 
                      <md-button class="md-accent md-raised has-ripple">
                        <span v-on:click="removeItem(order)">X</span>
                      </md-button>
                   </div>
                 </md-list-item>
                 <h2>Grand Total: ¥<span class="total">{{total}}  </span></h2>
                 <md-button class="md-accent md-raised has-ripple">
                   <router-link to='/confirmed'>Confirm Order</router-link>
                 </md-button>
             </md-list>
      </md-card-content>
    </md-card>
	</div>
</template>

<script>

import Firebase from 'firebase'

let db = Firebase.database();
let orderRef = db.ref('orders');

export default {
  name: 'cart',
  firebase: {
    orders: orderRef
  },
  methods: {
    removeItem: function (order) {
       orderRef.child(order['.key']).remove();
     }
  },
  computed: {
    total: function(){
      let total = [];
      Object.entries(this.orders).forEach(([key, val]) => {
          total.push(val.price) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    }
  }
}

</script>

<style scoped>

.order{
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
}

.order img{
  width: 110px;
}
  
.order .md-list-item {
    border-bottom: 2px crimson solid;
    padding: 20px 0;
}

.order .md-list-item div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.order .md-list-item div h3{
  min-width: 180px;
  color: crimson;
}

.order button a{
  color: #fff;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.md-theme-default.md-button:not([disabled]).md-accent.md-raised{
  background: crimson;
}

.md-theme-default a:not(.md-button):hover{
  color: #fff;
}

.md-theme-default.md-button:not([disabled]).md-accent.md-raised:hover {
    background-color: #2c3e50;
}

.order .md-button span{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

</style>
