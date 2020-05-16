<template>
  <div class="home">
    <book-template v-if="step" :step="step" />
  </div>
</template>

<script>
import { Component, Vue, Watch } from "vue-property-decorator";
import BookTemplate from "@/components/templates/BookTemplate";

@Component({
  components: {
    BookTemplate
  }
})
export default class Book extends Vue {
  step = null;

  async mounted() {
    await this.fetchStep();
  }

  @Watch("$route", { immediate: true, deep: true })
  onUrlChange() {
    window.scrollTo(0, 0);
    this.fetchStep();
  }

  async fetchStep() {
    const { chapterNumber, questionId, answer } = this.$route.params;
    let input = process.env.VUE_APP_BACKEND_URL;
    if (chapterNumber) {
      input += `/chapter/${chapterNumber}`;
    }
    if (questionId) {
      input += `/questions/${questionId}`;
    }
    if (answer) {
      input += `/${answer}`;
    }
    const response = await fetch(input);
    this.step = await response.json();
  }
}
</script>
