<template>
  <div class="fight">
    <template v-for="foe in foes">
      <status-component :entity="foe" :key="foe.name" />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Entity } from "@/types";
import StatusComponent from "../molecules/StatusComponent.vue";

@Component({
  components: { StatusComponent }
})
export default class LogsTemplate extends Vue {
  @Prop() private foes!: Entity[];
}
</script>

<style lang="scss" scoped>
.fight {
}
</style>
