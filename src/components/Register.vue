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
			auth.createUserWithEmailAndPassword(this.email, this.password)
			.then(() => {
				auth.signInWithEmailAndPassword(this.email, this.password)
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
