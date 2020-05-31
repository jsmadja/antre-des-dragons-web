<template>
  <div class="book">
    <b-tabs content-class="book-content" class="menu-bar">
      <b-tab active>
        <template v-slot:title>
          <div id="page-icon" />
        </template>
        <ChapterPageTemplate :step="step" />
      </b-tab>
      <b-tab title="Pip" v-if="step.pip.maximumHealthPoints">
        <template v-slot:title>
          <div id="pip-icon" />
        </template>
        <PipTemplate
          :pip="step.pip"
          @useHealingItem="$emit('useHealingItem', $event)"
          @equipItem="$emit('equipItem', $event)"
          @unequipItem="$emit('unequipItem', $event)"
        />
      </b-tab>
      <b-tab v-if="step.pip.maps.length > 0">
        <template v-slot:title>
          <div id="maps-icon" />
        </template>
        <MapsTemplate :maps="step.pip.maps" />
      </b-tab>
      <b-tab v-if="step.pip.maximumHealthPoints">
        <template v-slot:title>
          <div id="spells-icon" />
        </template>
        <SpellBookTemplate :spell-book="step.pip.spellBook" />
      </b-tab>
      <b-tab v-if="step.logEntries.length">
        <template v-slot:title>
          <div id="logs-icon" />
        </template>
        <LogsTemplate :entries="step.logEntries" />
      </b-tab>
      <b-tab>
        <template v-slot:title>
          <div id="notes-icon" />
        </template>
        <NotesTemplate />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ChapterPageTemplate from "./ChapterPageTemplate.vue";
import PipTemplate from "./PipTemplate.vue";
import LogsTemplate from "./LogsTemplate.vue";
import MapsTemplate from "./MapsTemplate.vue";
import NotesTemplate from "./NotesTemplate.vue";
import SpellBookTemplate from "./SpellBookTemplate.vue";
import { Step } from "@/types";

@Component({
  components: {
    ChapterPageTemplate,
    PipTemplate,
    LogsTemplate,
    MapsTemplate,
    SpellBookTemplate,
    NotesTemplate
  }
})
export default class BookTemplate extends Vue {
  @Prop() private step!: Step;
}
</script>

<style scoped lang="scss">
@function icon($value) {
  @return $value * -32px;
}

.book {
}

#page-icon {
  width: 32px;
  height: 32px;
  background-position: icon(11) icon(13);
  background-image: url("/img/rpg-icons.png");
}

#maps-icon {
  width: 32px;
  height: 32px;
  background-position: icon(12) icon(13);
  background-image: url("/img/rpg-icons.png");
}

#inventory-icon {
  width: 32px;
  height: 32px;
  background-position: 0 icon(10);
  background-image: url("/img/rpg-icons.png");
}

#pip-icon {
  width: 32px;
  height: 32px;
  background-position: icon(1) icon(7);
  background-image: url("/img/rpg-icons.png");
}

#fight-icon {
  width: 32px;
  height: 32px;
  background-position: icon(9) icon(5);
  background-image: url("/img/rpg-icons.png");
}

#spells-icon {
  width: 32px;
  height: 32px;
  background-position: icon(7) icon(4);
  background-image: url("/img/rpg-icons.png");
}

#logs-icon {
  width: 32px;
  height: 32px;
  background-position: icon(13) icon(13);
  background-image: url("/img/rpg-icons.png");
}

#notes-icon {
  width: 32px;
  height: 32px;
  background-position: icon(10) icon(17);
  background-image: url("/img/rpg-icons.png");
}
</style>
<style lang="scss">
.nav {
  padding-top: 4rem;
  position: fixed !important;
  bottom: 0 !important;
  background: #2f271d;
  width: 100%;
  left: 1rem;
}

.nav-link {
  padding: 0.8rem !important;
}

.book-content {
  padding-bottom: 1rem;
}
</style>
