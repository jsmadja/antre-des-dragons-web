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
  font-family: "Crimson Text", serif;
  overflow: scroll;
  font-size: 1.2rem;
  &__text {
    margin-bottom: 2rem;
    text-align: justify;
    line-height: 1.4rem;
    font-weight: 600;
  }

  background-color: #f8f5de;
  background-image: linear-gradient(
    to right,
    rgba(255, 210, 0, 0.4),
    rgba(200, 160, 0, 0.1) 11%,
    rgba(0, 0, 0, 0) 35%,
    rgba(200, 160, 0, 0.1) 65%
  );
  box-shadow: inset 0 0 75px rgba(255, 210, 0, 0.3),
    inset 0 0 20px rgba(255, 210, 0, 0.4), inset 0 0 30px rgba(220, 120, 0, 0.8);
  color: rgba(0, 0, 0, 0.5);
  padding-top: 2rem;
  padding-right: 3rem;
  padding-left: 3rem;
  padding-bottom: 0rem;
}
</style>
