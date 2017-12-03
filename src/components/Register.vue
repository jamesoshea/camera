<template>
	<div>
		<input type="text" v-model="email"/>
		<input type="password" v-model="password"/>
		<button @click="register">REGISTER</button>	
	</div>
</template>

<script>
import { auth } from './../services/firebase'

export default {
	data() {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		register() {
			auth.createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
				if (error) {
					console.log(error.code)
					console.log(error.message)
				} else {
					this.$router.push('/login')
				}
			});
		}
	}
}
</script>

<style lang="scss">

button {
	color: #000;
}
</style>
