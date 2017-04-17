<template>
	<div class="cart">
		<h1>Cart</h1>
		<form v-on:submit="addUser">
			<input type="text" v-model="newUser.name" placeholder="Enter Name">
			<input type="text" v-model="newUser.email" placeholder="Enter Email">
			<input type="submit" value="Register">
		</form>
		<ul>
			<li v-for="user in users">
				<span :class="{registered: user.registered}">
					{{user.name}}: {{user.email}} <button v-on:click="deleteUser">X</button>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>

export default {
  name: 'cart',
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
  },
  created: function () {
    this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then(function(response){
        this.users = response.data
      })
  }
}

</script>

<style scoped>



</style>
