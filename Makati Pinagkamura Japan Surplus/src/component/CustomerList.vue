<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const customers = ref([])

async function getCustomers() {
  const { data } = await supabase.from('customer').select()
  customers.value = data
}

onMounted(() => {
  getCustomers()
})
</script>

<template>
  <div>
    <h2>Customer List</h2>
    <ul>
      <li v-for="customer in customers" :key="customer.CUST_ID">
        {{ customer.cust_first_name }} {{ customer.cust_last_name }} - {{ customer.cust_city }}
      </li>
    </ul>
  </div>
</template>
