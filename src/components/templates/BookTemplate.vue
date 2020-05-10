<template>
  <div class="book">
    <div>
      <b-tabs content-class="pt-3 pl-3 pr-3 book-content" class="menu-bar">
        <b-tab active>
          <template v-slot:title>
            <div id="page-icon" />
          </template>
          <PageTemplate :step="step" />
        </b-tab>
        <b-tab title="Pip">
          <template v-slot:title>
            <div id="pip-icon" />
          </template>
        </b-tab>
        <b-tab title="Inventaire">
          <template v-slot:title>
            <div id="inventory-icon" />
          </template>
          <p>I'm a disabled tab!</p></b-tab
        >
        <b-tab title="Cartes">
          <template v-slot:title>
            <div id="maps-icon" />
          </template>
        </b-tab>
        <b-tab>
          <template v-slot:title>
            <div id="logs-icon" />
          </template>
        </b-tab>
        <b-tab>
          <template v-slot:title>
            <div id="fight-icon" />
          </template>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PageTemplate from "./PageTemplate.vue";
import { Step } from "@/types";

@Component({
  components: { PageTemplate }
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
  max-height: 100vh;
}

#page-icon {
  width: 32px;
  height: 32px;
  background-position: icon(4) icon(13);
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

#logs-icon {
  width: 32px;
  height: 32px;
  background-position: icon(11) icon(13);
  background-image: url("/img/rpg-icons.png");
}
</style>
<style lang="scss">
.nav {
  position: fixed !important;
  bottom: 0 !important;
  background: #f0f0f0;
  width: 100%;
}

.nav-link {
  padding: 0.8rem !important;
}

.book-content {
  padding-bottom: 6rem;
}
</style>
