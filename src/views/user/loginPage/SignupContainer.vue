<template>
  <v-card id="signup-container" class="d-flex flex-column align-center">
    <div class="text-h4">회원 가입</div>
    <div class="spacer" />
    <v-text-field class="text-field-size" label="아이디">
      <template v-slot:append><v-btn>중복 확인</v-btn> </template>
    </v-text-field>
    <v-text-field class="text-field-size" label="비밀번호" />
    <v-text-field class="text-field-size" label="이름" />
    <v-text-field class="text-field-size" label="이메일" />
    <div class="spacer" />
    <div class="d-flex">
      <v-btn class="left-btn">회원가입</v-btn>
      <v-btn @click="$emit('change-component', false)">로그인 페이지로</v-btn>
    </div>
  </v-card>
</template>

<script lang="ts">
export default {};
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
