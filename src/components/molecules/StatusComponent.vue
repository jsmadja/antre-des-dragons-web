<template>
  <div class="status">
    <h2>{{ entity.name }}</h2>

    <h3>Status</h3>
    <p>
      HP: {{ entity.currentHealthPoints }} / {{ entity.maximumHealthPoints }}
    </p>
    <p>Armor: {{ entity.armorPoints }}</p>
    <p>Dommages: +{{ entity.additionalDamagePoints }}</p>
    <p>
      Hit Roll Range: {{ entity.adjustedHitRollRange.min }} -
      {{ entity.adjustedHitRollRange.max }}
    </p>
    <span v-if="entity.sleeping">Endormi</span>

    <h3>Bonus</h3>
    <p v-if="entity.invisible">Invisible</p>
    <p v-if="entity.immuneToPoison">Immunisé contre le poison</p>
    <p v-if="entity.ableToStrikeTwice">Coup double</p>

    <p>Magic Armor: {{ entity.magicArmorPoints.armorPoints }}</p>

    <p>Magic Damages: {{ entity.magicDamagePoints.damagePoints }}</p>

    <h3>Malus</h3>
    <p v-if="entity.poisoned">Empoisonné</p>
    <p v-if="entity.loseInitiative">Perte d'initiative</p>
    <p v-if="entity.temporaryDamagePointsMalus.damagePoints">
      Dommages - {{ entity.temporaryDamagePointsMalus.damagePoints }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Entity } from "@/types";

@Component
export default class StatusComponent extends Vue {
  @Prop() entity!: Entity;
}
</script>

<style lang="scss" scoped>
.action {
  margin-bottom: 1rem;
  display: block;
}
</style>
