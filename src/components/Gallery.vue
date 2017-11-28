<template>
	<ul>
		<li v-for="photo in photos"></li>
	</ul>
</template>

<script>

import { storage } from './../config/firebase'

export default {
	props: {
		fileNames: 'Array',
	},
	mounted () {
		storage.ref().child('images')
	},
	computed: {
		fileNames() {
			return this.$store.getters.fileNames
		}
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
