<template>
  <div>
    <!-- 基于文件的路由系统 -->
    <!-- <NuxtLink to="/">Home</NuxtLink><br /> -->
    <!-- <NuxtLink to="/video">Video</NuxtLink> -->
    <!-- NuxtPage相当于Router-view -->
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
/**
 * title: 设置网页的标题。
 * ogTitle: 设置 Open Graph 标题，当页面在社交媒体上分享时会使用。
 * description: 设置页面的 meta 描述，有助于搜索引擎优化。
 * ogDescription: 设置 Open Graph 描述，同样在页面分享时使用。
 * ogImage: 设置 Open Graph 图片，当页面分享时显示。
 * twitterCard: 设置 Twitter 卡片类型。在这种情况下，summary_large_image 表示带有大图的摘要卡片。
 */
useSeoMeta({
  title: '这是一个牛逼的网站',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});
</script>
<style lang="scss">
:root {
  /* css变量设置主题色，这里不适用scoped，需要全局生效 */
  --van-primary-color: #fb7299;
}
// 基础样式
@import './assets/styles/base.scss';
// 字体图标
@import './assets/styles/iconfont.scss';
</style>
