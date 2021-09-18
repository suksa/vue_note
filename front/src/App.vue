<template>
  <div>
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue'; // vim 탭치면 코드완성
export default {
  components: {
    AppHeader,
  },
};
</script>

<style></style>
