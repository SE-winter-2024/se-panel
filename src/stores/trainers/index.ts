export const useTrainersStore = defineStore('trainers', () => {
  const trainers = ref([])

  const fetch = async () => {
    const res = await useApi('/trainer/trainers').get()

    if (res.statusCode.value === 200)
      trainers.value = res.data.value
  }

  return {
    trainers,
    fetch,
  }
})
