<template>
  <v-app>
    <v-app-bar elevation="2" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title><i>Start Up</i></v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-flex">
        <v-list-item>
          <router-link to="/">Login</router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="/">SignUp</router-link>
        </v-list-item>
      </div>
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style lang="scss" scoped>
@import url();
</style>
