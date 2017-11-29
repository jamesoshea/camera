<template>
	<ul class="mainList">
		<li v-for="srcUrl in photos" :key="srcUrl">
			<div>
				<img class="main" :src="srcUrl"/>
			</div>
		</li>
	</ul>
</template>

<script>

import { storage } from './../config/firebase'

export default {
	mounted () {
		this.fileNames.forEach((fileName) => {
			storage.ref().child(`images/${fileName}`).getDownloadURL()
				.then(url => this.photos.push(url))
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

.mainList {
	list-style: none;
}

</style>
