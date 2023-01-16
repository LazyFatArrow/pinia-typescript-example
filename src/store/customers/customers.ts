import { defineStore } from 'pinia'
import { Customer } from '../../types/Customer'

type State = {
  customers: Customer[]
  isRequestLoading: boolean
}

export const useCustomers = defineStore('customers', {
  state: (): State => ({
    customers: [],
    isRequestLoading: false,
  }),
  getters: {
    activeCustomersCount({ customers }): number {
      return customers.filter(({ isActive }) => isActive).length
    },
    getCustomerById({ customers }): (id: string) => Customer | undefined {
      return (id: string): Customer | undefined => {
        return customers.find((customer) => customer.id === id)
      }
    },
  },
  actions: {
    async fetchCustomers(): Promise<void> {
      const promise: Promise<Customer[]> = new Promise((resolve) => {
        resolve([
          {
            id: '1',
            fullName: 'John Doe',
            isActive: false,
            totalSpending: 3000,
          },
          {
            id: '2',
            fullName: 'Jane Doe',
            isActive: true,
            totalSpending: 5000,
          },
        ])
      })

      this.customers = await promise
    },
  },
})
