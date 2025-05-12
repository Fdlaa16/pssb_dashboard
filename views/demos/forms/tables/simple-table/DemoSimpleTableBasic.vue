<script setup lang="ts">
import axios from 'axios'

const data = ref('')

const desserts = [
  {
    dessert: 'Frozen Yogurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Ice cream sandwich',
    calories: 237,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Eclair',
    calories: 262,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Cupcake',
    calories: 305,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
]

const getPlayers = async () => {
  const res = await axios.get('http://localhost:8000/api/dashboard/player')

  console.log('res', res.data)
  data.value = res.data
}

onMounted(() => {
  getPlayers()
})
</script>

<template>
  <VTable class="text-no-wrap">
    <thead>
      <tr>
        <th>
          Desserts(100g Servings) {{ data }}
        </th>
        <th>
          calories
        </th>
        <th>
          Fat(g)
        </th>
        <th>
          Carbs(g)
        </th>
        <th>
          protein(g)
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.dessert"
      >
        <td>
          {{ item.dessert }}
        </td>
        <td>
          {{ item.calories }}
        </td>
        <td>
          {{ item.fat }}
        </td>
        <td>
          {{ item.carbs }}
        </td>
        <td>
          {{ item.protein }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
