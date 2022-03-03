<template>
  <div class="home">
    <div class="wrapper">
      <div class="content">
        <h1>check your site for trackers</h1>
        <TrackerSearch/>
      </div>
    </div>
  </div>
</template>

<script setup>
import TrackerSearch from '@/components/TrackerSearch.vue';
</script>

<style scoped lang="scss">
  .home{
    width: 100%;
    .wrapper{
      width: 100%;
      display: flex;
      justify-content: center;
      .content{
        width: 100%;
        padding: 1rem;
        max-width: 60rem;
      }
    }
  }
</style>