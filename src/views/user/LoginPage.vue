<template>
  <div
    id="login-page"
    class="d-flex flex-column justify-center align-center grey lighten-3"
  >
    <div class="d-flex flex-column align-center">
      <div class="grey darken-4 icon-container">
        <v-icon x-large dark> mdi-domain</v-icon>
      </div>
      <div id="description" class="text-h5">{{ pageDescription }}</div>
    </div>
    <v-slide-x-transition v-if="!isSignUp" hide-on-leave>
      <login-container
        :signinInfo="signinInfo"
        @click-login="clickLogin"
        @change-component="changeComponent"
        @change-id="(value) => (signinInfo.userId = value)"
        @change-password="(value) => (signinInfo.password = value)"
      />
    </v-slide-x-transition>
    <v-slide-x-transition v-else hide-on-leave>
      <signup-container
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
    </v-slide-x-transition>
  </div>
</template>
<script lang="ts">
import { SigninDto, SignupDto } from "@/api/ApiTypes";
import Vue from "vue";
import LoginContainer from "./loginPage/LoginContainer.vue";
import SignupContainer from "./loginPage/SignupContainer.vue";
interface LoginPageType {
  isSignUp: boolean;
  pageDescription: string;
  register: {
    label: string;
    types: string[];
    number: number;
  };
  signinInfo: SigninDto;
  signupInfo: SignupDto;
}
export default Vue.extend({
  components: {
    LoginContainer,
    SignupContainer,
  },
  data(): LoginPageType {
    return {
      pageDescription: "",
      isSignUp: false,
      register: {
        label: "",
        types: ["?????????", "??????"],
        number: 0,
      },
      signinInfo: {
        userId: "",
        password: "",
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
  created() {
    this.changeComponent(false);
  },
  methods: {
    changeRegisterType(value: number): void {
      if (value === 0) {
        this.register.label = "??????????????????";
      } else {
        this.register.label = "?????????????????????";
      }
      this.signupInfo.registerType = value;
    },
    async checkDuplicate(): Promise<void> {
      const response = await this.$http.checkUserIdDuplication(
        this.signupInfo.userId
      );
      const isNotDuplication = response.data;
      if (isNotDuplication) {
        this.$dialog.info({
          title: "?????? ????????? ?????????",
          text: "?????? ????????? ??????????????????.",
        });
      } else {
        this.$dialog.error({
          title: "????????? ?????????",
          text: "????????? ??????????????????.",
        });
      }
    },
    async clickSignup(): Promise<void> {
      const response = await this.$http.signup(this.signupInfo);
      const status: number = response.status;
      console.log(response);
      if (status !== 200) {
        this.$dialog.error({
          title: "???????????? ??????",
          text: "??????????????? ?????????????????????. ????????? ??????????????????.",
        });
      } else {
        this.$dialog.info({
          title: "???????????? ??????",
          text: "??????????????? ?????????????????????. ????????? ????????????.",
        });
      }
    },
    async clickLogin(): Promise<void> {
      const response = await this.$http.signin(this.signinInfo);
      if (response.status === 200) {
        this.$store.dispatch("setUserInfo", response.data);
        this.$dialog.info({
          title: "????????? ??????",
          text: `???????????? ?????????????????????. ???????????????. ${this.$store.state.userInfo.userName}???`,
        });
      } else {
        this.$dialog.error({
          title: "????????? ??????",
          text: `???????????? ?????????????????????. ????????? ?????? ?????? ??????????????????.`,
        });
      }
    },
    changeComponent(flag: boolean): void {
      this.isSignUp = flag;
      if (this.isSignUp == true) {
        this.pageDescription = "Sign up to StartUp";
      } else {
        this.pageDescription = "Sign in to StartUp";
      }
    },
  },
});
</script>

<style lang="scss" scope>
#login-page {
  .icon-container {
    padding: 10px;
    border-radius: 100%;
  }
  #description {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  width: 100%;
  height: 100%;
}
</style>
