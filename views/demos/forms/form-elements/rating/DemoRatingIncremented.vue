<script lang="ts" setup>
const rating = ref(4.5)
</script>

<template>
  <ClientOnly>
    <VRating
      v-model="rating"
      half-increments
      hover
    />
  </clientonly>
</template>
