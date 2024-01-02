// src/store.js
import create from 'zustand';

const useTaskStore = create((set) => ({
  // Step 1: Sub-options
  subOptions: '',
  setSubOptions: (subOptions) => set({ subOptions }),

  // Step 2: Budget
  minBudget: null,
  maxBudget: null,
  setBudget: (minBudget, maxBudget) => set({ minBudget, maxBudget }),

  // Step 3: Duration
  duration: '',
  setDuration: (duration) => set({ duration }),

  // Step 4: Start Date
  startDate: '',
  setStartDate: (startDate) => set({ startDate }),

  // Step 5: Description
  description: '',
  setDescription: (description) => set({ description }),

  // Step 6: Registration
  name: '',
  surname: '',
  email: '',
  telNumber: '',
  pass: '',
  setName: (name) => set({ name }),
  setSurname: (surname) => set({ surname }),
  setEmail: (email) => set({ email }),
  setTelNumber: (telNumber) => set({ telNumber }),
  setPass: (pass) => set({ pass }),

  // Step 7: Payment
  paymentMethod: '',
  setPaymentMethod: (paymentMethod) => set({ paymentMethod }),
}));

export default useTaskStore;
