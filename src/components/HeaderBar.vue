<template>
	<h1 v-text="headerText"></h1>
</template>

<script>
export default {
	name: 'HeaderBar',
	data() {
		return {
			headerText: 'Camera App'
		}
	}
}
</script>

<style lang="scss" scoped>

@import './../assets/variables.scss';

h1 {
	background-color: $light-color;
	color: $light-color;
	margin: 0;
	font-size: 8vh;
	height: 10vh;
}

h1 {
  text-align: center;
}

</style>
