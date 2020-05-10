<template>
  <b-link :href="action.url">
    <b-button block variant="primary">
      {{ action.answer ? action.answer + " - " : "" }}
      {{ action.question ? action.question : "Suivant" }}
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
