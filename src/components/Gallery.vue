<template>
	<ul class="mainList">
		<li v-for="srcUrl in photos" :key="srcUrl">
			<div class="galleryContainer">
				<img class="galleryImage" :src="srcUrl"/>
				<div class="galleryCaption">cunt</div>
			</div>
		</li>
	</ul>
</template>

<script>

import { storage } from './../services/firebase'

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

.galleryCaption {
	margin: 0;
	height: 15%;
	background-color: #000;
	top: 85%;
	opacity: 0.2;
	z-index: 1;
	color: #FFF;
}

.galleryContainer {
	margin: 0;
	width: 80vw;
}

.galleryImage {
	width: 80vw;
}

.mainList {
	list-style: none;
}

</style>
