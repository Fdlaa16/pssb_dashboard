<script lang="ts" setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
</script>

<template>
  <div class="demo-space-x">
    <VSwitch
      :id="useId()"
      v-model="insetSwitch1"
      :label="`Switch 1: ${insetSwitch1.toString()}`"
    />
    <VSwitch
      :id="useId()"
      v-model="insetSwitch2"
      :label="`Switch 2: ${insetSwitch2.toString()}`"
    />
  </div>
</template>
