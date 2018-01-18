<template>
  <div class="videos">
    <video class="video-streaming" id="myself" width="50%" height="640">
      {{ videoPlaceholder }}
    </video>
    <video class="video-streaming" id="other" width="50%" height="640">
      {{ videoPlaceholder }}
    </video>
  </div>
</template>

<script>
export default {
  name: 'StreamingVideo',
  data() {
    return {
      videoPlaceholder: 'Streaming video is not supported by your browser... :('
    }
  },
  methods: {
    getVideoElement() {
      return document.getElementById('myself');
    }
  },
  created() {
    //Init streaming video with webcam
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
                          .then((stream) => {
                            this.getVideoElement().srcObject = stream;
                            this.getVideoElement().play();
                          })
                          .catch((err) => { 
                            console.log(err);
                          })
  }
}
</script>

<style>
  #other {
    margin-top: 5%;
    margin-left: 0;
  }

  #myself {
    float: left;
    margin-right: 0;
    margin-top: 5%;
  }
</style>
