<template>
  <div class="status">
    <section>
      <h2 class="character">{{ entity.name }}</h2>
      <div class="stats">
        <p>
          Health
          <b-progress :max="entity.maximumHealthPoints" height="0.8rem">
            <b-progress-bar
              :value="entity.currentHealthPoints"
              variant="danger"
            >
              <strong
                >{{ entity.currentHealthPoints }} /
                {{ entity.maximumHealthPoints }}</strong
              >
            </b-progress-bar>
          </b-progress>
        </p>
        <p>Armor: {{ entity.armorPoints }}</p>
        <p>Dommages: +{{ entity.additionalDamagePoints }}</p>
        <p>
          Hit Roll Range: {{ entity.adjustedHitRollRange.min }} -
          {{ entity.adjustedHitRollRange.max }}
        </p>
        <p v-if="entity.silverCoins.value">
          {{ entity.silverCoins.value }} pièces d'argent
        </p>
        <span v-if="entity.sleeping">Endormi</span>
      </div>

      <div class="stats">
        <p v-if="entity.invisible">Invisible</p>
        <p v-if="entity.immuneToPoison">Immunisé contre le poison</p>
        <p v-if="entity.ableToStrikeTwice">Coup double</p>
        <p>Magic Armor: {{ entity.magicArmorPoints.armorPoints }}</p>
        <p>Magic Damages: {{ entity.magicDamagePoints.damagePoints }}</p>

        <p v-if="entity.poisoned">Empoisonné</p>
        <p v-if="entity.loseInitiative">Perte d'initiative</p>
        <p v-if="entity.temporaryDamagePointsMalus.damagePoints">
          Dommages - {{ entity.temporaryDamagePointsMalus.damagePoints }}
        </p>
      </div>

      <h2>Objets</h2>
      <div class="stats">
        <p v-for="item in entity.inventory.items" :key="item">
          {{ item }}
        </p>
      </div>
      <h2>Consommables</h2>
      <div class="stats">
        <template v-for="consommable in getConsommables()">
          <p :key="consommable.key">
            {{ consommable[0] }} x{{ consommable[1] }}
          </p>
        </template>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Entity } from "@/types";
import _ from "lodash";

@Component
export default class StatusComponent extends Vue {
  @Prop() entity!: Entity;

  getConsommables() {
    return _(this.entity.inventory.healingItems)
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
    // background-image: linear-gradient(to left, #2f271d, #272018);
    &.character {
      padding-left: 0.5rem;
      font-size: 3rem;
    }
  }

  section {
    border: solid 1px rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    padding: 0.5rem;
    display: flex;
    flex-wrap: wrap;

    .stats {
      padding: 1rem;
      border: solid 1px rgba(0, 0, 0, 0.5);
      border-radius: 3px;
      flex-grow: 1;
      margin-bottom: 1rem;
      &:first-of-type {
        margin-right: 0.5rem;
      }
      p {
        padding: 0;
        margin: 0;
      }
    }
  }
}
</style>
