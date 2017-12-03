<template>
	<div>
		<div class="container" v-if="id">
			<div class="column number1" @click="$router.push('/')">
				<p>Camera</p>
			</div>
			<div class="column number2" @click="$router.push('/gallery')">
				<p>Gallery</p>
			</div>
			<div class="column number3" @click="logout">
				<p>Logout</p>
			</div>
		</div>
		<div class="container" v-else>
			<div class="column number1" @click="$router.push('/login')">
				<p>Login</p>
			</div>
			<div class="column number2" @click="$router.push('/register')">
				<p>Register</p>
			</div>
		</div>
	</div>
</template>

<script>

import { auth } from './../services/firebase'

export default {
	name: 'HeaderBar',
	computed: {
		id() {
			return this.$store.getters.id
		}
	},
	data() {
		return {
			headerText: 'Camera App'
		}
	},
	methods: {
		logout() {
			auth.signOut()
			this.$router.push('login')
		}
	}
}
</script>

<style lang="scss" scoped>

@import './../assets/variables.scss';

.container {
	display: grid;
	grid-template-columns: 34% 33% 33%;
	background-color: $accent-color;
	color: #FFF;
	margin: 0;
	font-size: 3vh;
	height: 10vh;
}

.column {
	text-align: center;
}

.number1 {
	grid-column-start: 1;
}

.number2 {
	grid-column-start: 2;
}

.number3 {
	grid-column-start: 3;
}

p {
	text-align: center;
	cursor: pointer;
}

</style>
