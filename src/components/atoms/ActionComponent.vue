<template>
  <router-link class="action" :to="action.url">
    <b-button block variant="primary">
      {{ this.getTitle() }}
    </b-button>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action } from "@/types";

@Component
export default class ActionComponent extends Vue {
  @Prop() action!: Action;

  getTitle() {
    let title = this.action.answer ? this.action.answer + " - " : "";
    if (this.action.question) {
      title += this.action.question;
    } else {
      title += `Aller au chapitre ${
        this.action.chapter < 0 ? "suivant" : this.action.chapter
      }`;
    }
    return title;
  }
}
</script>

<style lang="scss" scoped>
.action {
  margin-bottom: 1rem;
  display: block;
}
</style>
