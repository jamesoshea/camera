<template>
		<div class="container">
		<h3>email</h3>
		<input class="form auth-input" type="text" v-model="email"/>
		<h3>password</h3>
		<input class="form auth-input" type="password" v-model="password"/>
		<button class="form auth-button" @click="buttonFunction(email, password)">{{ buttonText }}</button>	
	</div>
</template>

<script>
export default {
	props: {
		buttonText: {
			type: String
		},
		buttonFunction: {
			type: Function
		},
		placeholder: {
			type: String
		}
	},
	data() {
		return {
			email: '',
			password: ''
		}
	}
}
</script>

<style lang="scss" scoped>

@import './../assets/variables.scss';

h3 {
	text-align: center;
	color: $light-color;
}

.form {
	border: 1px solid #FFF; 
	border-radius: 5px;
	font-family: $standard-font;
	display: block;
	margin: auto;
	margin-top: 2vh;
	color: #FFF;
	background-color: $light-color;
}

form:focus {
	border-style: none;
}

.auth-input {
	width: 80vw;
}

.auth-button {
	width: 40vw;
}

</style>
