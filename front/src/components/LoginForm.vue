<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input type="text" id="password" v-model="password" />
    </div>
    <button :disabled="!isUsernameValid || !password" type="submit">
      로그인
    </button>
    <!-- v-bind:disabled 는 :disabled로 생략 가능 -->
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
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
        const { data } = await loginUser(userData);
        // 로그인 후 메인으로 이동
        this.$store.commit('setToken', data.token);
        this.$store.commit('setUsername', data.user.username);
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
