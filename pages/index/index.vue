<template>
  <div>
    <!-- 公共头部 -->
    <AppHeader></AppHeader>
    <!-- 频道模块 -->
    <van-tabs>
      <van-tab v-for="item in channelList" :key="item.id" :title="item.name" />
    </van-tabs>
    <!-- 视频列表 -->
    <van-list v-model:loading="loading" :finished="finished" finished-text="别翻了，没有了" @load="onLoad">
      <div class="video-list">
        <AppVideo v-for="item in list" :key="item.aid" :item="item"></AppVideo>
      </div>
    </van-list>
  </div>
</template>

<script lang="ts" setup>
// 视频列表数据的类型
import type { RootObject } from '@/types/video';
/* 默认请求方式是get */
/* 返回的数据自动通过ref包装了 */
const { data: channelList } = await useFetch('/api/channel', { method: 'GET' });

const { data: videoList } = await useFetch('/api/video', { method: 'GET' });

let list = ref<RootObject[]>([]);
// 加载中
const loading = ref(false);
// 是否加载完成
const finished = ref(false);
// 页码
let page = 1;
const pageSize = 20;
const onLoad = () => {
  loading.value = false;
  // 根据页码提取数据
  const start = (page - 1) * pageSize;
  const end = page * pageSize;
  const data = videoList.value?.slice(start, end) as RootObject[];
  // 追加数据
  list.value.push(...data);
  // 页码累加
  page++;
  // 判断是否加载完成
  if (videoList.value?.length === list.value?.length) {
    finished.value = true;
    return;
  }
};
/* 初始化加载，主动请求前20条数据，用于首屏渲染，方便SEO抓取，要不然页面只有 下载APP 几个字 */
// 如果不考虑SEO，可以注释掉，不用主动请求，因为会增加页面请求体积
onLoad();
</script>

<style lang="scss">

// 视频列表
.video-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
}


</style>
