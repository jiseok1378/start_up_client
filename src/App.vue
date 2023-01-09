<template>
  <v-app>
    <login-page />
  </v-app>
</template>

<script>
import LoginPage from "./views/user/LoginPage.vue";
export default {
  name: "App",
  components: {
    LoginPage,
  },

  data: () =>
    LoginPage({
      //
    }),
};
</script>
