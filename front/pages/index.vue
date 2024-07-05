<script setup lang="ts">
const { data } = await useFetch('/api/hello')
</script>

<template>
  <div>{{ data.hello }}</div>
  <h1>Hej med dig</h1>
</template>