export const useProfileStore = defineStore('profile-store', () => {
  const user = ref({})
  const profile = ref({})
  const currentId = ref(0)
  const loading = ref(false)

  const profileChange = reactive({
    medicalHistory: {
      edit: false,
      value: '',
    },
    sports: {
      edit: false,
      value: '',
    },
    Achievements: {
      edit: false,
      value: '',
    },
    Sport: {
      edit: false,
      value: '',
    },
    Education: {
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

      profileChange.medicalHistory.value = profile.value.MedicalHistory
      profileChange.sports.value = profile.value.Sports
    }

    loading.value = false
  }

  const submitChange = async (key: string) => {
    const res = await useApi('/user/profile').put({ [key]: profileChange[key].value })

    if (res.statusCode.value === 200) {
      fetch()
      profileChange[key].edit = false
    }
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
    profileChange,
    submitChange,
  }
})
