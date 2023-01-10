<template>
  <v-container id="login-container" class="d-flex flex-column align-center">
    <v-text-field
      class="text-field-size"
      @input="(v) => $emit('change-id', v)"
      label="아이디"
    />
    <v-text-field
      class="text-field-size"
      label="비밀번호"
      :append-icon="isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :type="isShowPassword ? 'text' : 'password'"
      @input="(v) => $emit('change-password', v)"
      @click:append="isShowPassword = !isShowPassword"
    />
    <div class="spacer" />
    <v-btn class="primary" @click="$emit('click-login')" block> 로그인 </v-btn>
    <a class="direction" @click="$emit('change-component', true)">
      계정이 없으신가요?
    </a>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    signinInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isShowPassword: false,
    };
  },
});
</script>
<style lang="scss" scope>
#login-container {
  padding: 0px 30px;
  width: 400px;
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
  .left-btn {
    margin-right: 15px;
  }
  #btn-container {
    width: 50%;
  }
}
</style>
