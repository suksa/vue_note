<template>
  <li>
    <div>
      <b>{{ postItem.title }}</b>
    </div>
    <div>{{ postItem.contents }}</div>
    <div>{{ postItem.createdAt | formatDate }}</div>
    <button @click="routeEditPage">수정</button>
    <button @click="deleteItem">삭제</button>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteItem() {
      if (confirm('정말 삭제?')) {
        await deletePost(this.postItem._id);
        this.$emit('refresh');
      }
    },
    routeEditPage() {
      const id = this.postItem._id;
      this.$router.push(`/post/${id}`);
    },
  },
};
</script>

<style></style>
