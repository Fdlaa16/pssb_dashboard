<script lang="ts" setup>
const checkboxOne = ref(true)
const checkboxTwo = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
</script>

<template>
  <div class="demo-space-x">
    <VCheckbox
      :id="useId()"
      v-model="checkboxOne"
      density="compact"
      :label="capitalizedLabel(checkboxOne)"
    />

    <VCheckbox
      :id="useId()"
      v-model="checkboxTwo"
      density="compact"
      :label="capitalizedLabel(checkboxTwo)"
    />
  </div>
</template>
