<template>
  <div id="login-page" class="d-flex justify-center align-center">
    <login-container
      v-if="!isSignUp"
      @click-login="clickLogin"
      @change-component="changeComponent"
    />
    <signup-container
      v-else
      :signupInfo="signupInfo"
      :register="register"
      @change-register-type="changeRegisterType"
      @change-id="(value) => (signupInfo.userId = value)"
      @change-password="(value) => (signupInfo.password = value)"
      @change-username="(value) => (signupInfo.name = value)"
      @change-email="(value) => (signupInfo.email = value)"
      @change-register-number="(value) => (signupInfo.registerNumber = value)"
      @click-signup="clickSignup"
      @check-duplication="checkDuplicate"
      @change-component="changeComponent"
    />
  </div>
</template>
<script lang="ts">
import { SignupDto } from "@/api/ApiTypes";
import Vue from "vue";
import LoginContainer from "./loginPage/LoginContainer.vue";
import SignupContainer from "./loginPage/SignupContainer.vue";
interface LoginPageType {
  isSignUp: boolean;
  register: {
    label: string;
    types: string[];
    number: number;
  };
  signupInfo: SignupDto;
}
export default Vue.extend({
  components: {
    LoginContainer,
    SignupContainer,
  },
  data(): LoginPageType {
    return {
      isSignUp: false,
      register: {
        label: "",
        types: ["사용자", "기업"],
        number: 0,
      },
      signupInfo: {
        userId: "",
        password: "",
        name: "",
        email: "",
        registerType: 0,
        registerNumber: "",
      },
    };
  },
  methods: {
    changeRegisterType(value: number): void {
      if (value === 0) {
        this.register.label = "주민등록번호";
      } else {
        this.register.label = "사업자등록번호";
      }
      this.signupInfo.registerType = value;
    },
    checkDuplicate(): void {
      console.log(this.signupInfo.userId);
    },
    clickSignup(): void {
      this.$http.signupApi(this.signupInfo);
    },
    clickLogin(): void {
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
