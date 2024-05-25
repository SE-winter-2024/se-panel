export const useProfileStore = defineStore('profile-store', () => {
  const user = ref({})
  const profile = ref({})
  const currentId = ref(0)
  const loading = ref(false)

  const traineeChange = reactive({
    medicalHistory: {
      edit: false,
      value: '',
    },
    sports: {
      edit: false,
      value: '',
    },
  })

  const fetch = async () => {
    loading.value = true

    const res = await useApi<{ user: any; profile: any }>(`/user/${currentId.value}/profile`).get()

    if (res.statusCode.value === 200) {
      user.value = res.data.value?.user
      profile.value = res.data.value?.profile

      traineeChange.medicalHistory.value = profile.value.MedicalHistory
      traineeChange.sports.value = profile.value.Sports
    }

    loading.value = false
  }

  const setId = (id: number) => {
    currentId.value = id
  }

  return {
    user,
    profile,
    setId,
    fetch,
    loading,
    traineeChange,
  }
})
