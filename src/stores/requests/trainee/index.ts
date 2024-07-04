export const useRequestsStore = defineStore('trinee-requests', () => {
  const requests = ref([])
  const loading = ref(false)

  const fetch = async () => {
    loading.value = true

    const res = await useApi('/trainee/request/all').get()

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
