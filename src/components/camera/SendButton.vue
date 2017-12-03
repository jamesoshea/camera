<template>
	<div class="camera-button-container">
		<svg viewBox="0 0 20 20" xml:space="preserve">
			<g>
				<path d="M0,18 L21,9 L0,0 L0,7 L15,9 L0,11 L0,18 Z" />
			</g>
		</svg>
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="scss">

@import './../../assets/variables.scss';

.camera-button-container {
	text-align: center;
	position: fixed;
  margin: 0 auto;
  left: 15vw;
  bottom: 15vw;
  width: 10vh;
  height: 10vh;
  border-radius: 5vh;
  fill: $accent-color;
  cursor: pointer;
  z-index: 10;
}

</style>
