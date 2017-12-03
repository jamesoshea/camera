<template>
	<AuthForm
		:buttonText="'Login'"
		:buttonFunction="login"
	/>
</template>

<script>
import { auth } from './../services/firebase'
import AuthForm from './AuthForm'

export default {
	components: {
		AuthForm
	},
	data() {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		login(email, password) {
			auth.signInWithEmailAndPassword(email, password)
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

@import './../assets/variables.scss';

body {
	background-color: $dark-color;
}

</style>
