<template>
	<div>
		<AuthForm
			:buttonText="'Login'"
			:buttonFunction="login"
		/>
		<div class="signup-link">
			<router-link to="/register">Don't have an account?</router-link>
		</div>
	</div>
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

<style lang="scss" scoped>

@import './../assets/variables.scss';

a {
	color: $dark-color;
}

.signup-link {
	margin-top: 5vh;
	text-align: center;
	color: $dark-color;
}

</style>
