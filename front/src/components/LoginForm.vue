<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input type="text" id="username" v-model="username" />
      <p class="warning" v-if="!isUsernameValid && username">
        이메일을 입력해 주세요
      </p>
    </div>
    <div>
      <label for="password">pw: </label>
      <input type="text" id="password" v-model="password" />
    </div>
    <button
      :disabled="!isUsernameValid || !password"
      type="submit"
      class="disabled"
      :class="!isUsernameValid || !password ? 'disabled' : null"
    >
      로그인
    </button>
    <!-- v-bind:disabled 는 :disabled로 생략 가능 -->
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    // vda 자동완성
    return {
      // form values
      username: '',
      password: '',

      // log
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };
        await this.$store.dispatch('LOGIN', userData);
        this.$router.push('/main');
        // this.logMessage = `${data.user.username} 님 환영합니다`;
      } catch (error) {
        console.log(error);
        // this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
