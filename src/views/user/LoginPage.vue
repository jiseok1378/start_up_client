<template>
  <div id="login-page" class="d-flex justify-center align-center">
    <login-container v-if="!isSignUp" @change-component="changeComponent" />
    <signup-container v-else @change-component="changeComponent" />
  </div>
</template>

<script lang="ts">
import LoginContainer from "./loginPage/LoginContainer.vue";
import SignupContainer from "./loginPage/SignupContainer.vue";
export default {
  components: {
    LoginContainer,
    SignupContainer,
  },
  data() {
    return {
      isSignUp: false,
    };
  },
  methods: {
    changeComponent(flag: boolean): void {
      this.isSignUp = flag;
    },
  },
};
</script>

<style lang="scss" scope>
#login-page {
  width: 100%;
  height: 100%;
}
</style>
