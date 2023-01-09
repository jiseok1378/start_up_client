<template>
  <v-card id="login-container" class="d-flex flex-column align-center">
    <div class="text-h4">로그인</div>
    <div class="spacer" />
    <v-text-field class="text-field-size" label="아이디" />
    <v-text-field class="text-field-size" label="비밀번호" />
    <div class="spacer" />
    <div class="d-flex">
      <v-btn class="left-btn" @click="$emit('click-login')"> 로그인 </v-btn>
      <v-btn @click="$emit('change-component', true)"> 회원가입 </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
#login-container {
  padding: 30px;
  width: 30rem;
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
