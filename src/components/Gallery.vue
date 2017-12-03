<template>
	<ul class="main-list">
		<li v-for="photo in sortedPhotos" :key="photo.fileName">
			<div class="gallery-container">
				<img class="gallery-image" :src="photo.url"/>
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
						self.photos.push({ 
							fileName: photo.fileName,
							url,
							caption: photo.caption
						})
					})
				})
			} else {
				this.$store.commit('setMessage', 'You haven\'t taken any pictures yet.')
			}
		})
	},
	computed: {
		userId() {
			return this.$store.getters.id
		},
		sortedPhotos() {
			return this.photos.sort((a, b) => {
				return b.fileName.slice(8, b.fileName.length) - a.fileName.slice(8, a.fileName.length)
			})
		}
	},
	data() {
		return {
			photoRefs: [],
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
	font-size: 4vh;
}

.gallery-image {
	width: 100vw;
}

</style>
