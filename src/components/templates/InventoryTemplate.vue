<template>
  <div class="inventory">
    <h1>Equipement</h1>
    <h2>Objets équipés</h2>
    <ul>
      <li v-for="item in pip.inventory.equipedItems" :key="item">
        {{ item }}
      </li>
    </ul>
    <h2>Objets</h2>
    <ul>
      <li v-for="item in pip.inventory.items" :key="item">
        {{ item }}
      </li>
    </ul>

    <h2>Consommables</h2>
    <ul>
      <li v-for="item in pip.inventory.healingItems" :key="item">
        {{ item.name }}
        <span v-if="item.doses">({{ item.doses.length }} doses)</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Pip } from "@/types";

@Component
export default class InventoryTemplate extends Vue {
  @Prop() private pip!: Pip;
}
</script>

<style lang="scss" scoped>
.inventory {
}
</style>
