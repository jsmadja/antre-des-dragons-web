<template>
  <div class="spellbook">
    <h1>Livre de sortilèges</h1>
    <template v-for="spell in spellBook">
      <p :key="spell">{{ spell }}</p>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { SpellBook } from "@/types";

@Component
export default class SpellBookTemplate extends Vue {
  @Prop() private spellBook!: SpellBook;
}
</script>

<style lang="scss" scoped>
.spellbook {
}
</style>
