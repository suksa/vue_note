<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="title">title: </label>
        <input type="text" id="title" v-model="title" />
      </div>
      <div>
        <label for="contents">contents: </label>
        <textarea type="text" id="contents" v-model="contents" />
        <p v-if="!isContentsValid">250자 이하로 작성해 주세요</p>
      </div>
      <router-link to="/main">메인으로</router-link>
      <button type="submit">수정</button>
    </form>
    <p>{{ logMessage }}</p>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      const id = this.$route.params.id;
      try {
        await editPost(id, {
          thtile: this.title,
          contents: this.contents,
        });
        this.$router.push('/main');
      } catch (error) {
        this.logMessage = error;
      }
    },
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    this.title = data.title;
    this.contents = data.contents;
  },
};
</script>

<style></style>
