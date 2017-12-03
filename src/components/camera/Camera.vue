<template>
	<div class="camera-view">
    <div v-if="showOverlay" class="camera-overlay">
      <div class="cancel-button-container" @click="cancelPhoto">
        <svg viewBox="0 0 45 45" xml:space="preserve">
          <g>
            <path d="M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0  c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4  s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3  s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7  s-0.1-0.5-0.3-0.7L14.1,11.3z" />
          </g>
        </svg>
      </div>
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
    cancelPhoto() {
      this.showOverlay = false
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(mediaStream => {
          this.mediaStream = mediaStream
          this.$refs.video.srcObject = mediaStream
          this.$refs.video.play()
        })
        .catch(error => console.log(error))
    },
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

.cancel-button-container {
	text-align: center;
	position: fixed;
  margin: 0 auto;
  left: 85vw;
  top: 22.5vw;
  width: 10vh;
  height: 10vh;
  border-radius: 5vh;
  fill: $light-color;
  cursor: pointer;
  z-index: 10;
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
