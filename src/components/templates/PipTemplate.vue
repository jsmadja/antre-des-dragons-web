<template>
  <div class="pip">
    <status-component :entity="pip" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Pip } from "@/types";
import StatusComponent from "../molecules/StatusComponent.vue";
@Component({
  components: { StatusComponent }
})
export default class PipTemplate extends Vue {
  @Prop() private pip!: Pip;
}
</script>

<style lang="scss" scoped>
.pip {
  background-color: #f8f5de;
  background-image: linear-gradient(
    to right,
    rgba(255, 210, 0, 0.4),
    rgba(200, 160, 0, 0.1) 11%,
    rgba(0, 0, 0, 0) 35%,
    rgba(200, 160, 0, 0.1) 65%
  );
  box-shadow: inset 0 0 75px rgba(255, 210, 0, 0.3),
    inset 0 0 20px rgba(255, 210, 0, 0.4), inset 0 0 30px rgba(220, 120, 0, 0.8);
  color: rgba(0, 0, 0, 0.5);
  padding-top: 1rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  padding-bottom: 1.5rem;
}
</style>
