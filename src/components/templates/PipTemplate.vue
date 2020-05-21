<template>
  <div class="pip">
    <status-component
      :entity="pip"
      @useHealingItem="$emit('useHealingItem', $event)"
      @equipItem="$emit('equipItem', $event)"
      @unequipItem="$emit('unequipItem', $event)"
    />
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
}
</style>
