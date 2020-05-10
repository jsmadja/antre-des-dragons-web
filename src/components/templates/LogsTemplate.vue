<template>
  <div class="logs">
    <h1>Journal</h1>
    <template v-for="log in entries">
      <div :key="log.id">
        <p v-if="log.type === 'CHAPTER'">
          <b>{{ log.author }}</b> se rend au chapitre <b>{{ log.chapter }}</b>
        </p>
        <p v-if="log.type === 'ROLL'">
          <b>{{ log.author }}</b> lance les dés et obtient
          <b>{{ log.value }}</b>
        </p>
        <p v-if="log.type === 'HEALING_ITEM'">
          <b>{{ log.author }}</b> ajoute <b>{{ log.healingItem.name }}</b> dans
          son sac à dos
        </p>
        <p v-if="log.type === 'ITEM'">
          <b>{{ log.author }}</b> ajoute <b>{{ log.item }}</b> dans son sac à
          dos
        </p>
        <p v-if="log.type === 'MISC'">
          <b>{{ log.message }}</b>
        </p>
      </div>
    </template>
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
}
</style>
