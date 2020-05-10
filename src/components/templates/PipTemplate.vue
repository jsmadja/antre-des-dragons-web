<template>
  <div class="pip">
    <h1>Pip</h1>

    <h2>Status</h2>
    <p>HP: {{ pip.currentHealthPoints }} / {{ pip.maximumHealthPoints }}</p>
    <p>Armor: {{ pip.armorPoints }}</p>
    <p>Dommages: +{{ pip.additionalDamagePoints }}</p>
    <p>
      Hit Roll Range: {{ pip.adjustedHitRollRange.min }} -
      {{ pip.adjustedHitRollRange.max }}
    </p>
    <span v-if="pip.sleeping">Endormi</span>

    <h2>Bonus</h2>
    <p v-if="pip.invisible">Invisible</p>
    <p v-if="pip.immuneToPoison">Immunisé contre le poison</p>
    <p v-if="pip.ableToStrikeTwice">Coup double</p>

    <p>Magic Armor: {{ pip.magicArmorPoints.armorPoints }}</p>

    <p>Magic Damages: {{ pip.magicDamagePoints.damagePoints }}</p>

    <h2>Malus</h2>
    <p v-if="pip.poisoned">Empoisonné</p>
    <p v-if="pip.loseInitiative">Perte d'initiative</p>
    <p v-if="pip.temporaryDamagePointsMalus.damagePoints">
      Dommages - {{ pip.temporaryDamagePointsMalus.damagePoints }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Pip } from "@/types";

@Component
export default class PipTemplate extends Vue {
  @Prop() private pip!: Pip;
}
</script>

<style lang="scss" scoped>
.pip {
}
</style>
