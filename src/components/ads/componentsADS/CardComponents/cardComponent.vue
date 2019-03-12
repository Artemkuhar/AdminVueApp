<template functional>
  <div
    class="card"
    v-show="parent.showCard"
  >
    <v-flex
      xs12
      sm6
      offset-sm3
    >
      <v-card>
        <v-img
          :src="parent.itemCard.imgUrl"
          aspect-ratio="2.75"
        ></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{parent.itemCard.name}}</h3>
            <h4>Price {{parent.itemCard.price}}</h4>
            <p>
              Stereo speakers tuned by AKG
              Surround sound with Dolby Atmos technology (Dolby Digital, Dolby Digital Plus included)
              Ultra High Quality Audio Playback
              UHQ 32-bit DSD support PCM: Up to 32 bits
              DSD: DSD64/128 9
              Audio playback format
              MP3, M4A, 3GA, AAC, OGG, OGA, WAV, WMA, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA, APE, DSF, DFF
            </p>
          </div>
        </v-card-title>
        <div
          class="shut-btn"
          @click="props.onUpdateCard"
        >
          <v-icon color="black">close</v-icon>
        </div>
      </v-card>
    </v-flex>
  </div>
</template>
<style scoped>
@import './index.css';
</style>