<script lang="ts" setup>
const rating = ref(4.5)
</script>

<template>
  <ClientOnly>
    <VRating v-model="rating">
      <template #item="props">
        <VIcon
          v-bind="props"
          :size="25"
          :color="props.isFilled ? 'success' : 'secondary'"
          class="me-3"
          :icon="props.isFilled ? 'tabler-mood-smile-beam' : 'tabler-mood-sad'"
        />
      </template>
    </VRating>
  </ClientOnly>
</template>
