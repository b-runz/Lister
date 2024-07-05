<script setup lang="ts">
const { data } = await useFetch('/api/getVectorFromWord/test')
</script>

<template>
  <div>{{ data }}</div>
</template>