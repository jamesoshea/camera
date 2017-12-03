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
	color: $dark-color;
}

.form {
	font-family: $standard-font;
	display: block;
	margin: auto;
  margin-top: 2vh;
  border: 0;
  background-color: $dark-color;
  opacity: 0.3;
  width: 100%;
  text-align: center;
  height: 8vh;
  font-size: 4vh;
}

input:focus {
	outline: none;
	border: 1px solid $comp-color;
}

.auth-input {
	width: 100vw;
	color: $light-color;
}

.auth-button {
	width: 40vw;
	background-color: $light-color;
	color: $dark-color;
}

</style>
