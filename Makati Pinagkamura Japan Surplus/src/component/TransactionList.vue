<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'


const transactions = ref([])

async function getTransactions() {
  const { data } = await supabase.from('transaction').select()
  transactions.value = data
}

onMounted(() => {
  getTransactions()
})
</script>

<template>
  <div>
    <h2>Transaction History</h2>
    <ul>
      <li v-for="transaction in transactions" :key="transaction.TRANS_ID">
        {{ transaction.trans_type }} - ${{ transaction.trans_amount }} - {{ transaction.trans_status }}
      </li>
    </ul>
  </div>
</template>
