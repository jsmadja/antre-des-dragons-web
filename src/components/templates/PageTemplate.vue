<template>
  <div class="page">
    <div class="page__text" v-html="toHtml(step.chapterText)" />
    <action-component
      v-for="action in step.actions"
      :action="action"
      :key="action.url"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ActionComponent from "../atoms/ActionComponent.vue";
import { Step } from "@/types";

@Component({
  components: { ActionComponent }
})
export default class PageTemplate extends Vue {
  @Prop() private step!: Step;

  toHtml(text: string) {
    return text.replace(/(\r\n|\n|\r)/g, "<br />");
  }
}
</script>

<style lang="scss" scoped>
.page {
  overflow: scroll;
  font-size: 1.2rem;
  &__text {
    margin-bottom: 2rem;
  }
}
</style>
