<template>
  <div class="status">
    <section>
      <h2 class="character">{{ entity.name }}</h2>
      <div class="stats">
        <p v-if="entity.level"><strong>Niveau :</strong> {{ entity.level }}</p>
        <p>
          <strong>Points de vie :</strong> {{ entity.currentHealthPoints }} /
          {{ entity.maximumHealthPoints }}
        </p>
        <p v-if="entity.experiencePoints">
          <strong>Points d'expérience :</strong> {{ entity.experiencePoints }} /
          {{ 20 * entity.level }}
        </p>
        <p v-if="entity.armorPoints">
          <strong>Armure :</strong> {{ entity.armorPoints }}
        </p>
        <p v-if="entity.additionalDamagePoints">
          <strong>Dommages :</strong> +{{ entity.additionalDamagePoints }}
        </p>
        <p>
          <strong>Jet de dés nécessaires :</strong>
          {{ entity.adjustedHitRollRange.min }} -
          {{ entity.adjustedHitRollRange.max }}
        </p>
        <p v-if="entity.silverCoins && entity.silverCoins.value">
          <strong>{{ entity.silverCoins.value }} pièces d'argent</strong>
        </p>
        <span v-if="entity.sleeping">Endormi</span>
        <p v-if="entity.invisible">Invisible</p>
        <p v-if="entity.immuneToPoison">Immunisé contre le poison</p>
        <p v-if="entity.ableToStrikeTwice">Coup double</p>
        <p v-if="entity.magicArmorPoints.armorPoints">
          <strong>Armure magique :</strong>
          {{ entity.magicArmorPoints.armorPoints }}
        </p>
        <p v-if="entity.magicDamagePoints.damagePoints">
          <strong>Dommages magiques :</strong>
          {{ entity.magicDamagePoints.damagePoints }}
        </p>

        <p v-if="entity.poisoned">Empoisonné</p>
        <p v-if="entity.loseInitiative">Perte d'initiative</p>
        <p v-if="entity.temporaryDamagePointsMalus.damagePoints">
          Dommages - {{ entity.temporaryDamagePointsMalus.damagePoints }}
        </p>
      </div>

      <h2>Objets équipés</h2>
      <div class="stats">
        <p v-for="item in entity.inventory.equipedItems" :key="item.name">
          {{ item.name }}
        </p>
      </div>

      <h2>Objets</h2>
      <div class="stats">
        <p v-for="item in getItems()" :key="item.name">
          {{ item[0] }} <span v-if="item[1] > 1">x{{ item[1] }}</span>
        </p>
      </div>
      <h2>Consommables</h2>
      <div class="stats">
        <template v-for="consommable in getConsommables()">
          <p :key="consommable.key">
            {{ consommable[0] }}
            <span v-if="consommable[1] > 1">x{{ consommable[1] }}</span>
          </p>
        </template>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Entity, Pip } from "@/types";
import _ from "lodash";

@Component
export default class StatusComponent extends Vue {
  @Prop() entity!: Entity | Pip;

  getConsommables() {
    return _(this.entity.inventory.healingItems)
      .countBy("name")
      .entries();
  }

  getItems() {
    return _(this.entity.inventory.items)
      .countBy("name")
      .entries();
  }
}
</script>

<style lang="scss" scoped>
.status {
  h2 {
    font-size: 1.5rem;
    width: 100%;
    padding-top: 0.5rem;
    padding-right: 0;
    padding-left: 0.5rem;
    padding-bottom: 0.5rem;
    &.character {
      padding-left: 0.5rem;
      font-size: 3rem;
    }
  }

  section {
    padding: 0.5rem;
    display: flex;
    flex-wrap: wrap;

    .stats {
      padding: 1rem;
      border: solid 1px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      margin-bottom: 0.5rem;
      width: 100%;
      min-height: 5rem;
      p {
        padding: 0;
        margin: 0;
      }
    }
  }
}
</style>
