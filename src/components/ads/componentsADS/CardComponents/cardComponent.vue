<template>
<div class="card" v-show="showCard">
  <v-flex xs12 sm6 offset-sm3>
    <v-card >
      <v-img
        :src="itemCard.imgUrl"
        aspect-ratio="2.75"
      ></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{itemCard.name}}</h3>
          <h3>Price {{itemCard.price}}</h3>
          <div> 
            Stereo speakers tuned by AKG
            Surround sound with Dolby Atmos technology (Dolby Digital, Dolby Digital Plus included)
            Ultra High Quality Audio Playback
            UHQ 32-bit & DSD support PCM: Up to 32 bits
            DSD: DSD64/128 9
            Audio playback format
            MP3, M4A, 3GA, AAC, OGG, OGA, WAV, WMA, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA, APE, DSF, DFF
        </div>
        </div>
      </v-card-title>
        <div class="shut-btn" @click="updateCard"><v-icon color="black">close</v-icon></div>
    </v-card>
  </v-flex>
</div>
</template>

<script>
export default {
  props:{
    itemCard: {
      type: Object,
      default: () => {},
    },
    showCard: {
      type: Boolean,
      default: false,
    },
    onUpdateCard: {
      type: Function,
      default: () => {},
    },
  },
  name: 'card',
    methods:{
    updateCard(){
      this.onUpdateCard();
      }
  },
};
</script>
<style scoped>
@import './index.css';
</style>