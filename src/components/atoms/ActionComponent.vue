<template>
  <b-link class="action" :href="action.url">
    <b-button block variant="primary">
      {{ action.answer ? action.answer + " - " : "" }}
      {{
        action.question
          ? action.question
          : `Aller au chapitre ${action.chapter}`
      }}
    </b-button>
  </b-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action } from "@/types";

@Component
export default class ActionComponent extends Vue {
  @Prop() action!: Action;
}
</script>

<style lang="scss" scoped>
.action {
  margin-bottom: 1rem;
  display: block;
}
</style>
