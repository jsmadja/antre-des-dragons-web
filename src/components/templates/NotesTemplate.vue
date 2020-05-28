<template>
  <div class="notes">
    <h1>Notes</h1>
    <b-form-textarea
      id="textarea"
      v-model="text"
      autofocus
      placeholder="Enter something..."
      rows="10"
      @update="save()"
    ></b-form-textarea>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class NotesTemplate extends Vue {
  private text: string = localStorage.getItem("notes") || "";
  save() {
    localStorage.setItem("notes", this.text);
  }
}
</script>

<style lang="scss" scoped>
.notes {
  #textarea {
    background: transparent;
    border: none;
    height: 70vh;
  }
}
</style>
