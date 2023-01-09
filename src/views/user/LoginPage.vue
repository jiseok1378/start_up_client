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
    async checkDuplicate(): Promise<void> {
      const response = await this.$http.checkUserIdDuplication(
        this.signupInfo.userId
      );
      const isNotDuplication = response.data;
      if (isNotDuplication) {
        this.$dialog.confirm({
          title: "사용 가능한 아이디",
          text: "사용 가능한 아이디입니다.",
        });
      } else {
        this.$dialog.error({
          title: "중복된 아이디",
          text: "중복된 아이디입니다.",
        });
      }
    },
    async clickSignup(): Promise<void> {
      const response = await this.$http.signup(this.signupInfo);
      const status: number = response.status;
      console.log(response);
      if (status !== 200) {
        this.$dialog.error({
          title: "회원가입 불가",
          text: "회원가입에 실패하였습니다. 정보를 확인해주세요.",
        });
      } else {
        this.$dialog.confirm({
          title: "회원가입 성공",
          text: "회원가입에 성공하였습니다. 로그인 해주세요.",
        });
      }
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
