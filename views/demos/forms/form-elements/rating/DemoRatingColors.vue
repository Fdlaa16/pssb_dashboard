<script lang="ts" setup>
const rating = ref(4)
const ratingColors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
</script>

<template>
  <div class="d-flex flex-column">
    <ClientOnly>
      <VRating
        v-for="color in ratingColors"
        :key="color"
        v-model="rating"
        :color="color"
      />
    </clientonly>
  </div>
</template>
