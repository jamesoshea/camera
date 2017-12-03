<template>
	<ul class="main-list">
		<li v-for="srcUrl in photos" :key="srcUrl">
			<div class="gallery-container">
				<img class="gallery-image" :src="srcUrl"/>
				<div class="gallery-caption">cunt</div>
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

@import './../assets/variables.scss';

.main-list {
	list-style: none;
	margin: 0;
	padding: 0;
}

.gallery-container {
	position: relative;
	margin: 0;
	width: 100vw;
}

.gallery-caption {
	position: absolute;
	top: 90%;
  min-width: 100%;
  min-height: 10%;
  background-color: $dark-color;
  opacity: 0.3;
  display: inline;
  z-index: 10;
  text-align: center;
  color: $light-color;
	font-size: 2em;
}

.gallery-image {
	width: 100vw;
}

</style>
