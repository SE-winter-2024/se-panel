export const useRequestsStore = defineStore('trianer-requests', () => {
  const requests = ref([])
  const loading = ref(false)

  const fetch = async () => {
    loading.value = true

    const res = await useApi('/trainer/requests').get()

    if (res.statusCode.value === 200)
      requests.value = res.data.value

    loading.value = false
  }

  return {
    requests,
    loading,
    fetch,
  }
})
