<script lang="ts" setup>
const people = ref(['John'])
</script>

<template>
  <div class="demo-space-x">
    <VSwitch
      :id="useId()"
      v-model="people"
      label="John"
      value="John"
    />

    <VSwitch
      :id="useId()"
      v-model="people"
      label="Jacob"
      value="Jacob"
    />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
