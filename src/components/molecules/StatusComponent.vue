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
          <strong>Armure :</strong> +{{ entity.armorPoints }}
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

      <template v-if="isPip()">
        <h2>Objets equipes</h2>
        <div class="stats ">
          <div
            v-for="item in entity.inventory.equipedItems"
            :key="item.name"
            class="equipable"
          >
            {{ item.name }}
            <button
              @click="unequip(item.name)"
              class="float-right btn btn-primary btn-sm"
            >
              enlever
            </button>
          </div>
        </div>

        <h2>Objets</h2>
        <div class="stats">
          <div v-for="item in getItems()" :key="item.name" class="equipable">
            {{ item[0] }} <span v-if="item[1] > 1">x{{ item[1] }}</span>
            <button
              v-if="isEquipable(item[0])"
              @click="equip(item[0])"
              class="float-right btn btn-primary btn-sm"
            >
              équiper
            </button>
          </div>
        </div>
        <h2>Consommables</h2>
        <div class="stats">
          <template v-for="consommable in getConsommables()">
            <div :key="consommable[0]" class="consommable">
              {{ consommable[0] }}
              <span v-if="consommable[1] > 1">x{{ consommable[1] }}</span>
              <button
                @click="use(consommable[0])"
                class="float-right btn btn-primary btn-sm"
              >
                utiliser
              </button>
            </div>
          </template>
        </div>
      </template>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Entity, Item, Pip } from "@/types";
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
    const equipedItemNames = this.entity.inventory.equipedItems.map(
      i => i.name
    );
    return _(this.entity.inventory.items)
      .filter(item => equipedItemNames.indexOf(item.name) < 0)
      .countBy("name")
      .entries();
  }

  isEquipable(itemName: string) {
    const item = this.getItemByName(itemName);
    if (item) return item.armor || item.weapon;
    return false;
  }

  getItemByName(itemName: string): Item | undefined {
    return this.entity.inventory.items.find(i => i.name === itemName);
  }

  use(healingItemName: string) {
    this.$emit("useHealingItem", healingItemName);
  }

  equip(itemName: string) {
    this.$emit("equipItem", itemName);
  }

  unequip(itemName: string) {
    this.$emit("unequipItem", itemName);
  }

  isPip() {
    return this.entity.name === "Pip";
  }
}
</script>

<style lang="scss" scoped>
.status {
  h2 {
    width: 100%;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;

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
      .consommable,
      .equipable {
        line-height: 2rem;
      }
    }
  }
}
</style>
