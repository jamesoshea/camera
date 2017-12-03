<template>
	<ul class="main-list">
		<li v-for="photo in photos" :key="photo.fileName">
			<div class="gallery-container">
				<img class="gallery-image" :src="photo.fileName"/>
				<div class="gallery-caption">{{ photo.caption }}</div>
			</div>
		</li>
	</ul>
</template>

<script>

import { storage } from './../services/firebase'
import { database } from './../services/firebase'

export default {
	mounted () {
		const self = this
		database.ref().child(this.userId).on('value', (snapshot) => {
			if(snapshot.exists()) {
			// firebase is gross lol
				self.photoRefs = Object.entries(snapshot.val()).map((e) => e[1])
				self.photoRefs.forEach((photo) => {
					storage.ref(`images/${self.userId}/${photo.fileName}`).getDownloadURL()
					.then((url) => {
						self.photos.push({ fileName: url, caption: photo.caption })
					})
				})
			}
		})
	},
	computed: {
		userId() {
			return this.$store.getters.id
		},
	},
	data() {
		return {
			photoRefs: [],
			photos: [],
			captions: []
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
	width: 100vw;
}

.gallery-caption {
	position: absolute;
	top: 75%;
  width: 100%;
  height: 8vh;
  background-color: $light-color;
  opacity: 0.5;
  z-index: 10;
  text-align: center;
  color: $dark-color;
	font-size: 2em;
}

.gallery-image {
	width: 100vw;
}

</style>
