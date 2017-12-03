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
import { database } from './../services/firebase'

export default {
	mounted () {
		database.ref().child(this.userId).on('value', (snapshot) => {
			// firebase is gross lol
			this.fileNames = Object.entries(snapshot.val()).map((e) => e[1])
			this.fileNames.forEach((fileName) => {
				storage.ref(`images/${this.userId}/${fileName}`).getDownloadURL()
				.then(url => this.photos.push(url))
			})
		})
	},
	computed: {
		userId() {
			return this.$store.getters.id
		},
	},
	data() {
		return {
			fileNames: [],
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
  background-color: $dark-color;
  opacity: 0.3;
  z-index: 10;
  text-align: center;
  color: #FFF;
	font-size: 2em;
}

.gallery-image {
	width: 100vw;
}

</style>
