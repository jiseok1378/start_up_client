<template>
  <v-card id="signup-container" class="d-flex flex-column align-center">
    <div class="text-h4">회원 가입</div>
    <div class="spacer" />
    <v-text-field
      class="text-field-size"
      label="아이디"
      :value="signupInfo.id"
      @input="(v) => $emit('change-id', v)"
    >
      <template v-slot:append>
        <v-btn @click="$emit('check-duplication')">중복 확인</v-btn>
      </template>
    </v-text-field>
    <v-text-field
      class="text-field-size"
      label="비밀번호"
      @input="(v) => $emit('change-password', v)"
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
        >
          <v-btn v-for="(value, index) in register.types" :key="index">
            {{ value }}
          </v-btn>
        </v-btn-toggle>
      </template>
    </v-text-field>
    <div class="spacer" />
    <div class="d-flex">
      <v-btn @click="$emit('click-signup')" class="left-btn">회원가입</v-btn>
      <v-btn @click="$emit('change-component', false)">로그인 페이지로</v-btn>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
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
  padding: 30px;
  width: 30rem;
  .spacer {
    width: 100%;
    height: 20px;
  }
  .left-btn {
    margin-right: 15px;
  }
  .text-field-size {
    width: 100%;
  }
}
</style>
