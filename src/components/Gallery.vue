<template>
	<ul>
		<li v-for="photo in photos"></li>
	</ul>
</template>

<script>

import { storage } from './../config/firebase'

export default {
	mounted () {
		this.data = storage.ref().child(`images`)
	},
	data() {
		return {
			photos: [],
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
