<template>
  <div class="page">
    <h1>{{ step.pip.currentChapter.title }}</h1>
    <b-img
      v-if="step.pip.currentChapter.illustrated"
      class="illustration"
      thumbnail
      fluid
      :src="getImageSource()"
      :alt="step.pip.currentChapter.title + '.png'"
    />
    <div class="page__text" v-html="toHtml(step.chapterText)" />

    <template v-for="foe in step.foes">
      <status-component :entity="foe" :key="foe.name" />
    </template>

    <div class="actions">
      <action-component
        v-for="action in step.actions"
        :pip="step.pip"
        :action="action"
        :key="action.url"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ActionComponent from "../atoms/ActionComponent.vue";
import { Step } from "@/types";
import StatusComponent from "../molecules/StatusComponent.vue";

@Component({
  components: { ActionComponent, StatusComponent }
})
export default class ChapterPageTemplate extends Vue {
  @Prop() private step!: Step;

  toHtml(text: string) {
    return text.replace(/(\r\n|\n|\r)/g, "<br /><br />");
  }

  getImageSource() {
    return `/img/illustrations/${this.step.pip.currentChapter.title}.png`;
  }
}
</script>

<style lang="scss" scoped>
.page {
  &__text {
    overflow: hidden;
    font-size: 0.9rem;
    text-align: justify;
    line-height: 1.4rem;
    font-weight: 600;
  }

  .illustration {
    text-align: center;
  }

  .actions {
    margin-top: 2rem;
  }
}
</style>
