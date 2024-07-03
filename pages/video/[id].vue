<template>
  <div>
    <h1>video</h1>
    <!-- 获取动态路由id -->
    <h2>{{ $route.params.id }}</h2>
  </div>
</template>

<script lang="ts" setup>
const $route = useRoute();
console.log('[id]——》',$route.params.id);
</script>

<style lang="scss" scoped>


</style>