// src/store.js
import create from 'zustand'

const useTaskStore = create((set) => ({
  subOptions: '',
  setSubOptions: (subOptions) => set({ subOptions }),

  type: ' ',
  setType: (type) => set({ type }),

  area: null,
  setArea: (area) => set({ area }),

  minBudget: null,
  maxBudget: null,
  setBudget: (minBudget, maxBudget) => set({ minBudget, maxBudget }),

  duration: '',
  setDuration: (duration) => set({ duration }),

  startDate: '',
  setStartDate: (startDate) => set({ startDate }),

  description: '',
  setDescription: (description) => set({ description }),

  city: ' ',
  district: ' ',
  setCity: (city) => set({ city }),
  setDistrict: (district) => set({ district }),

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

  paymentMethod: '',
  setPaymentMethod: (paymentMethod) => set({ paymentMethod }),
}))

export default useTaskStore
