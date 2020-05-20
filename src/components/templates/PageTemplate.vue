<template>
  <div class="page">
    <h3>{{ step.pip.currentChapter.title }}</h3>
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
    return text.replace(/(\r\n|\n|\r)/g, "<br /><br />");
  }
}
</script>

<style lang="scss" scoped>
.page {
  &__text {
    overflow: hidden;
    font-size: 0.9rem;
    margin-bottom: 2rem;
    text-align: justify;
    line-height: 1.4rem;
    font-weight: 600;
  }
}
</style>
