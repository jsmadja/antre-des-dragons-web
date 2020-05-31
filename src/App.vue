<template>
  <b-container id="app" class="pl-0 pr-0">
    <b-row no-gutters>
      <b-col
        xs="12"
        offset-sm="1"
        sm="10"
        offset-lg="3"
        lg="6"
        offset-xl="3"
        xl="6"
      >
        <div class="scroll">
          <router-view />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss">
@import "App.scss";
</style>
