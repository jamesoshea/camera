<template>
	<div>
		<input type="text" v-model="email"/>
		<input type="password" v-model="password"/>
		<button @click="login">login</button>	
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
		login() {
			auth.signInWithEmailAndPassword(this.email, this.password)
			.then(() => {
				this.$router.push('/')
			})	
			.catch((error) => {
				console.log(error.code)
				console.log(error.message)
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
