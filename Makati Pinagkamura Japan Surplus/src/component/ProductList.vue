<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const products = ref([])

async function getProducts() {
  const { data } = await supabase.from('product').select()
  products.value = data
}

onMounted(() => {
  getProducts()
})
</script>

<template>
  <div>
    <h2>Product List</h2>
    <ul>
      <li v-for="product in products" :key="product.PROD_ID">
        {{ product.prod_name }} - ${{ product.prod_price }}
      </li>
    </ul>
  </div>
</template>
