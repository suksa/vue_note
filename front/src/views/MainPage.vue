<template>
  <div>
    <h1>main</h1>
    <router-link to="/add">
      글쓰기
    </router-link>
    <div v-if="isLoading">
      loading..
    </div>
    <ul v-else class="ul">
      <PostListItem
        v-for="postItem in postItems"
        :key="postItem._id"
        :postItem="postItem"
        @refresh="fetchData"
      />
    </ul>
  </div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import { fetchPosts } from '@/api/posts';

export default {
  components: {
    PostListItem,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
.ul li {
  border: 1px solid black;
}
</style>
