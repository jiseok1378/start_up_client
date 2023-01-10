<template>
  <v-container id="login-container" class="d-flex flex-column align-center">
    <v-text-field class="text-field-size" label="아이디" />
    <v-text-field class="text-field-size" label="비밀번호" />
    <div class="spacer" />
    <v-btn class="primary" @click="$emit('click-login')" block> 로그인 </v-btn>
    <a class="direction" @click="$emit('change-component', true)">
      계정이 없으신가요?
    </a>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
#login-container {
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
  .left-btn {
    margin-right: 15px;
  }
  #btn-container {
    width: 50%;
  }
}
</style>
