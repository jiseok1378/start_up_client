<template>
  <div id="login-page" class="d-flex justify-center align-center">
    <login-container
      v-if="!isSignUp"
      @click-login="clickLogin"
      @change-component="changeComponent"
    />
    <signup-container v-else @change-component="changeComponent" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import LoginContainer from "./loginPage/LoginContainer.vue";
import SignupContainer from "./loginPage/SignupContainer.vue";
export default Vue.extend({
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
    clickLogin() {
      alert("로그인");
    },
    changeComponent(flag: boolean): void {
      this.isSignUp = flag;
    },
  },
});
</script>

<style lang="scss" scope>
#login-page {
  width: 100%;
  height: 100%;
}
</style>
