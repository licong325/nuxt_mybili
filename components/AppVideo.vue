<template>
  <div>
    <NuxtLink class="v-card" v-for="item in 20" :key="item" :to="`/video/0`">
      <div class="card">
        <div class="card-img">
          <img class="pic" src="@/assets/images/loading.png" alt="当你觉得扛不住的时候来看看这段视频" />
        </div>
        <div class="count">
          <span>
            <i class="iconfont icon_shipin_bofangshu"></i>
            676.2万
          </span>
          <span>
            <i class="iconfont icon_shipin_danmushu"></i>
            1.6万
          </span>
        </div>
      </div>
      <p class="title">当你觉得扛不住的时候来看看这段视频</p>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
