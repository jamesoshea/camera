<template>
	<ul>
		<li v-for="fileName in fileNames" :key="fileName">
			{{ fileName }}
		</li>
	</ul>
</template>

<script>

import { storage } from './../config/firebase'

export default {
	mounted () {
		this.fileNames.forEach((fileName) => {
			console.log(storage.ref().child(`images/${fileName}`).fullPath)
		})
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
