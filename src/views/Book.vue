<template>
  <div class="home">
    <book-template
      v-if="step"
      :step="step"
      @useHealingItem="useHealingItem"
      @equipItem="equipItem"
      @unequipItem="unequipItem"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import BookTemplate from "@/components/templates/BookTemplate.vue";
import { formatLogEntry, Step } from "@/types";

@Component({
  components: {
    BookTemplate
  }
})
export default class Book extends Vue {
  [x: string]: any;
  step?: Step | null = null;

  async mounted() {
    await this.fetchStep();
  }

  @Watch("$route", { immediate: true, deep: true })
  onUrlChange() {
    window.scrollTo(0, 0);
    this.fetchStep();
  }

  async fetchStep() {
    const { pipId, chapterNumber, questionId, answer } = this.$route.params;
    let input = process.env.VUE_APP_BACKEND_URL || "";
    if (pipId) {
      input += `/${pipId}`;
    }
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
    this.showLogEntries();
  }

  async useHealingItem(healingItemName: string) {
    const input = process.env.VUE_APP_BACKEND_URL || "";
    const response = await fetch(
      `${input}/${
        this.step ? this.step.pip.id : ""
      }/inventory/healingItems/${healingItemName}:use`
    );
    const fetchedStep = await response.json();
    if (this.step) {
      this.step.logEntries = fetchedStep.logEntries;
      this.step.pip = fetchedStep.pip;
      this.showLogEntries();
    }
  }

  async equipItem(itemName: string) {
    const input = process.env.VUE_APP_BACKEND_URL || "";
    const response = await fetch(
      `${input}/${
        this.step ? this.step.pip.id : ""
      }/inventory/items/${itemName}:equip`
    );
    const fetchedStep = await response.json();
    if (this.step) {
      this.step.logEntries = fetchedStep.logEntries;
      this.step.pip = fetchedStep.pip;
      this.showLogEntries();
    }
  }

  async unequipItem(itemName: string) {
    const input = process.env.VUE_APP_BACKEND_URL || "";
    const response = await fetch(
      `${input}/${
        this.step ? this.step.pip.id : ""
      }/inventory/items/${itemName}:unequip`
    );
    const fetchedStep = await response.json();
    if (this.step) {
      this.step.logEntries = fetchedStep.logEntries;
      this.step.pip = fetchedStep.pip;
      this.showLogEntries();
    }
  }

  showLogEntries() {
    if (!this.step) {
      return;
    }
    let delay = 1000;
    this.step.logEntries
      .filter(log => log.type !== "CHAPTER" && log.type !== "ROLL")
      .forEach(logEntry => {
        setTimeout(
          () =>
            this.$bvToast.toast(formatLogEntry(logEntry), {
              toaster: "b-toaster-bottom-full",
              noCloseButton: true,
              toastClass: "toast",
              bodyClass: "toast__body",
              autoHideDelay: 1500,
              appendToast: true,
              noFade: true
            }),
          delay
        );
        delay += 1700;
      });
  }
}
</script>
