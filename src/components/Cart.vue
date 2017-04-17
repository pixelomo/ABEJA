<template>
	<div class="cart">
		<h1>Your Order</h1>
		<!-- <form v-on:submit="addUser">
			<input type="text" v-model="newUser.name" placeholder="Enter Name">
			<input type="text" v-model="newUser.email" placeholder="Enter Email">
			<input type="submit" value="Register">
		</form> -->
		<!-- <ul>
			<li v-for="user in users">
				<span :class="{registered: user.registered}">
					{{user.name}}: {{user.email}} <button v-on:click="deleteUser">X</button>
				</span>
			</li>
		</ul> -->
		<div v-for="order in orders">
		  <p>{{order.title}} <span>¥{{order.price}}</span> <button>X</button></p>
		</div>
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
  data () {
    return {
      newUser: {},
      users: []
    }
  },
  methods: {
    addUser: function (e) {
    	this.users.push({
    		name: this.newUser.name,
    		email: this.newUser.email,
    		registered: true
    	})
      e.preventDefault();
    },
    deleteUser: function (user) {
      this.users.splice(this.users.indexOf(user), 1)
    }
  }
}

</script>

<style scoped>



</style>
