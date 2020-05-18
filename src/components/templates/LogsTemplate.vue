<template>
  <div class="logs">
    <h1>Journal</h1>
    <div class="text">
      <template v-for="log in entries">
        <div :key="log.id">
          <p v-if="log.type === 'CHAPTER'">
            <b>{{ log.author }}</b> se rend au chapitre
            <b>{{ log.chapterTitle }}</b>
          </p>
          <p v-if="log.type === 'ROLL'">
            <b>{{ log.author }}</b> lance les dés et obtient
            <b>{{ log.value }}</b>
          </p>
          <p v-if="log.type === 'ITEM'">
            <b>{{ log.author }}</b> ajoute <b>{{ log.item }}</b> dans son sac à
            dos
          </p>
          <p v-if="log.type === 'MISC'">
            <b>{{ log.author }}</b> {{ log.message }}
          </p>
          <p v-if="log.type === 'FIGHT'">
            <b>{{ log.message }}</b>
          </p>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { LogEntry } from "@/types";

@Component
export default class LogsTemplate extends Vue {
  @Prop() private entries!: LogEntry[];
}
</script>

<style lang="scss" scoped>
.logs {
  .text {
    font-family: "Crimson Text", serif;
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
  padding-top: 1rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  padding-bottom: 1.5rem;
}
</style>
