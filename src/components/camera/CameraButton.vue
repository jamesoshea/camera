<template>
	<div class="camera-button-container">
		<svg viewBox="0 0 500 500" xml:space="preserve">
			<g>
				<path d="M487.921,285.89l-202-138.8l143.4-65.2c16,18,29.5,38.6,40,61.6C490.421,189.69,495.821,239.19,487.921,285.89z     M294.221,485.89l16.5-155.9l-224.4,102C142.921,480.19,219.721,500.89,294.221,485.89z M325.021,477.59c7.5-2.6,15-5.5,22.3-8.8    c66.7-30.3,113.3-86.9,133.2-152l-129.2-88.8L325.021,477.59z M63.321,409.69l143.2-65l-202.2-144.9c-9.1,48-4.1,99.1,17.6,146.9    C32.721,370.29,46.821,391.39,63.321,409.69z M164.121,13.39c-6.7,2.4-13.4,5-20.1,8c-65.1,29.6-111.1,84.3-131.8,147.5    l128.5,92.1L164.121,13.39z M196.321,5.49l-16.4,155.9l224.4-102C347.621,11.19,270.821-9.51,196.321,5.49z" />
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
