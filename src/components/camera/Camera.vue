<template>
	<div class="camera-view">
    <div v-if="showOverlay" class="camera-overlay">
      <div>
        <input class="caption-input" type="text" v-model="caption">
      </div>
    </div>
    <video ref="video" class="camera-stream"></video>
    <CameraButton v-if="!showOverlay" @click.native="takePhoto"/>
    <sendButton v-else @click.native="savePhoto"/>
  </div>
</template>

<script>
import { auth } from './../../services/firebase'
import { storage } from './../../services/firebase'
import { database } from './../../services/firebase'

import CameraButton from './CameraButton'
import SendButton from './SendButton'

export default {
  name: 'camera',
  components: {
    CameraButton,
    SendButton
  },
  beforeCreate() {
    if (!auth.currentUser) {
      this.$router.push('/login')  
    }
  },
  mounted () {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(mediaStream => {
        this.mediaStream = mediaStream
        this.$refs.video.srcObject = mediaStream
        this.$refs.video.play()
      })
      .catch(error => console.log(error))
  },
  destroyed() {
    if(this.mediaStream) this.mediaStream.getVideoTracks()[0].stop()
  },
  data () {
    return {
      caption: '',
      mediaStream: null,
      photoBlob: null,
      showOverlay: false,
    }
  },
  computed: {
    userId() {
      return this.$store.getters.id
    }
  },
  methods: {
    takePhoto() {
      const mediaStreamTrack = this.mediaStream.getVideoTracks()[0]
      const imageCapture = new window.ImageCapture(mediaStreamTrack)
      this.$refs.video.pause()
      return imageCapture.takePhoto().then(blob => {
        this.photoBlob = blob
        this.showOverlay = true
      })
    },
    savePhoto() {
      const self = this
      const fileName = `picture-${new Date().getTime()}`
      const newRef = database.ref().child(self.userId).push()
      newRef.set({ caption: this.caption, fileName })
        .then((res) => {
          storage.ref().child(`images/${self.userId}/${fileName}`).put(self.photoBlob)
            .then((res) => {
              self.showOverlay = false;
              self.$router.push('/gallery')
            })
            .catch(() => console.log('photo set error'))
        })
    }
  }
}
</script>

<style lang="scss" scoped>

@import './../../assets/variables.scss';

.camera-overlay {
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  display: block;
  z-index: 10;
  text-align: center;
  padding-top: 41vh;
  color: $light-color;
  font-size: 8vh;
}

.camera-view {
  position: fixed;
  width: 100vw;
  max-height: 100vh;
  top: 10vh;
  margin: auto;
}

.camera-stream {
    width: 100%;
}

.caption-input {
	font-family: $standard-font;
	display: block;
	margin: auto;
  margin-top: 2vh;
  border: 0;
	color: $light-color;
  background-color: $dark-color;
  opacity: 0.3;
  width: 100%;
  text-align: center;
  height: 8vh;
  font-size: 4vh;
}
</style>
