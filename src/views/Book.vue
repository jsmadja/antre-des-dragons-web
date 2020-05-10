<template>
  <div class="home">
    <book-template v-if="step" :step="step" />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
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

  async fetchStep() {
    const { chapterNumber, questionId, answer } = this.$route.params;
    let input = "http://localhost:8080/api";
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
