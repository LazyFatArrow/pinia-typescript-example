<script setup lang="ts">
  import { useCustomers } from './store/customers/customers'
  import { storeToRefs } from 'pinia'

  const customersStore = useCustomers()
  const { customers, isRequestLoading, activeCustomersCount, getCustomerById } = storeToRefs(customersStore)

  customersStore.fetchCustomers()
</script>

<template>
  <p v-if="isRequestLoading">Loading...</p>

  <div v-else>
    <p>total number of customers {{ customers.length }}</p>
    <p>of which are active: {{ activeCustomersCount }}</p>
    <p>{{ getCustomerById('10') || '' }}</p>
  </div>
</template>
