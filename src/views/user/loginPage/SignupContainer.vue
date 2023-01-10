<template>
  <v-container id="signup-container" class="d-flex flex-column align-center">
    <v-text-field
      class="text-field-size"
      label="아이디"
      @input="(v) => $emit('change-id', v)"
    >
      <template v-slot:append>
        <v-btn
          dark
          :disabled="signupInfo.userId === ''"
          @click="$emit('check-duplication')"
          >중복 확인</v-btn
        >
      </template>
    </v-text-field>
    <v-text-field
      class="text-field-size"
      label="비밀번호"
      :append-icon="isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :type="isShowPassword ? 'text' : 'password'"
      @input="(v) => $emit('change-password', v)"
      @click:append="isShowPassword = !isShowPassword"
    />
    <v-text-field
      class="text-field-size"
      label="이름"
      @input="(v) => $emit('change-username', v)"
    />
    <v-text-field
      class="text-field-size"
      label="이메일"
      @input="(v) => $emit('change-email', v)"
    />
    <v-text-field
      class="text-field-size"
      :label="register.label"
      @input="(v) => $emit('change-register-number', v)"
    >
      <template v-slot:append>
        <v-btn-toggle
          v-model="registerType"
          @change="(v) => $emit('change-register-type', v)"
          dark
        >
          <v-btn v-for="(value, index) in register.types" :key="index">
            {{ value }}
          </v-btn>
        </v-btn-toggle>
      </template>
    </v-text-field>
    <div class="spacer"></div>
    <v-btn @click="$emit('click-signup')" class="primary" block disabled>
      회원가입
    </v-btn>
    <a class="direction" @click="$emit('change-component', false)">
      이미 계정이 있으신가요?
    </a>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      isShowPassword: false,
      registerType: 0,
    };
  },
  created() {
    // 등록 타입 초기값 0으로 설정
    this.$emit("change-register-type", this.registerType);
  },
  methods: {},
  props: {
    register: {
      type: Object,
      default: () => ({}),
    },
    signupInfo: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>
<style lang="scss" scope>
#signup-container {
  padding: 0px 30px;
  width: 30rem;
  .direction {
    margin-top: 20px;
  }
  .spacer {
    width: 100%;
    height: 20px;
  }
  .text-field-size {
    width: 100%;
  }
}
</style>
