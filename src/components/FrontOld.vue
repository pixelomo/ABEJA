<template>
	<div class="hero">
		<input type="text" v-model="title">
		<md-card>
		  <md-card-header>
		    <h1 class="md-title">{{title}}</h1>
		  </md-card-header>
		  <md-card-content>
             <p v-if="showName" v-text="user.firstName"></p>
             <p v-else >Register</p>
             <ul>
             	<li v-for="item in items">{{item.title}}</li>
             </ul>
             <md-button v-on:click="greet('Hi ' + user.firstName)" class="md-primary md-raised-button">Browse The Store</md-button>
             <br>
             <input type="text" v-on:keyup="search">
             <label>First Name: </label><input type="text" v-model="user.firstName">
             <label>Last Name: </label><input type="text" v-model="user.lastName">
             <h3>Hello {{fullName}}</h3>
		  </md-card-content>
		</md-card>
	</div>
</template>

<script>

export default {
  name: 'front',
  data () {
    return {
      title: 'Welcome to ABEJA Store',
      user: {
        firstName: 'Alan',
        lastName: 'Sutherland'
      },
      showName: true,
      items: [
        {title: 'Google Pixel'},
        {title: 'Samsung Galaxy S8'},
        {title: 'iPhone 8'}
      ]
    }
  },
  methods: {
    greet: function (greet) {
      alert(greet)
    },
    search: function (e) {
      console.log(e.target.value)
    }
  },
  computed: {
    fullName: function () {
      return this.user.firstName + ' ' + this.user.lastName
    }
  }
}

</script>

<style scoped>



</style>
