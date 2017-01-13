<template>
	<div class="ui middle aligned center aligned grid">
		<div class="column">
	    <h2 class="ui teal image header">
	      <img src="~src/icons/logo-small.png" class="image">
	      <div class="content">
	        Log-in to your account
	      </div>
	    </h2>
	    <form class="ui large form">
	      <div class="ui stacked segment">
	        <div class="field">
	          <div class="ui left icon input">
	            <i class="user icon"></i>
	            <input v-model="email" type="text" name="email" placeholder="E-mail address">
	          </div>
	        </div>
	        <div class="field">
	          <div class="ui left icon input">
	            <i class="lock icon"></i>
	            <input v-model="password" type="password" name="password" placeholder="Password">
	          </div>
	        </div>
	        <div @click="login" class="ui fluid large teal submit button">Login</div>
	      </div>
	      <div class="ui error message"></div>
	    </form>
	    <div class="ui message">
	      New to us? <a href="#">Sign Up</a>
	    </div>
	  </div>
	</div>
</template>
<script>
	export default {
  		name: 'login',
  		data() {
  			return {
  				email: '',
  				password: ''
  			}
  		},
  		methods: {
  			login() {
  				var self = this;
  				var data = {
  					client_id: 2,
  					client_secret: 'GloulJuUFMxEA4jjkebGjAmf0qp3FMqmK5t5xgm8',
  					grant_type: 'password',
  					username: this.email,
  					password: this.password
  				}

  				this.$http.post('http://localhost:5512/oauth/token', data)
  				.then(function(response) {
  					self.$auth.setToken(response.data.access_token, response.data.expires_in + Date.now())
  					self.$router.push('/home')
  				})
  			}
  		}
	}
</script>
<style>
	body > .grid {
		height: 100%;
	}

	.column {
		max-width: 450px;
	}
</style>