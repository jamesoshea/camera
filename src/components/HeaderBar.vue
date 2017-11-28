<template>
	<div class="container">
		<div class="column number1">
			<p>Camera</p>
		</div>
		<div class="column number2">
			<p>Gallery</p>
		</div>
	</div>
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

.container {
	display: grid;
	grid-template-columns: 50% 50%;
	background-color: $light-color;
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

h1 {
  text-align: center;
}

</style>
