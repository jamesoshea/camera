<template>
	<AuthForm
		:buttonText="'Sign up'"
		:buttonFunction="register"
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
		register(email, password) {
			auth.createUserWithEmailAndPassword(email, password)
			.then(() => {
				auth.signInWithEmailAndPassword(email, password)
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
