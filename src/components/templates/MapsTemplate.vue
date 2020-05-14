<template>
  <div class="maps">
    <h1>Cartes</h1>
    <b-row>
      <b-col class="map" sm="12" xl="6" v-for="map in maps" :key="map"
        ><b-img thumbnail fluid :src="`/img/maps/${map}.png`" :alt="map"></b-img
      ></b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AdventureMap } from "@/types";

@Component
export default class MapsTemplate extends Vue {
  @Prop() private maps!: AdventureMap[];
}
</script>

<style lang="scss" scoped>
.maps {
  .map {
    position: inherit;
  }
  img {
    margin-bottom: 1rem;
  }
}
</style>
