<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const suppliers = ref([])

async function getSuppliers() {
  const { data } = await supabase.from('supplier').select()
  suppliers.value = data
}

onMounted(() => {
  getSuppliers()
})
</script>

<template>
  <div>
    <h2>Supplier List</h2>
    <ul>
      <li v-for="supplier in suppliers" :key="supplier.SUPP_ID">
        {{ supplier.supp_first_name }} {{ supplier.supp_last_name }} - {{ supplier.supp_city }}
      </li>
    </ul>
  </div>
</template>
