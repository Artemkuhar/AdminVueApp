<template functional>
  <v-dialog
    v-model="parent.spiner"
    hide-overlay
    persistent
    width="300"
  >
    <v-card
      color="primary"
      dark
    >
      <v-card-text>Sending your rating
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>