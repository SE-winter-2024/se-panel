import { useDialogStore } from '../dialog'

const emptyForm = () => ({
  name: '',
  description: '',
  video_path: '',
})

export const useSportsStore = defineStore('sports', () => {
  const sports = ref([])
  const loading = ref(false)

  const form = ref(emptyForm())

  const openForm = () => {
    form.value = emptyForm()
    useDialogStore().openDialog('sport-store-form')
  }

  const fetch = async () => {
    loading.value = true

    const res = await useApi('/admin/sports').get()

    if (res.statusCode.value === 200)
      sports.value = res.data.value ?? []

    loading.value = false
  }

  const submit = async () => {
    const res = await useApi('admin/sport').post(form.value)

    if (res.statusCode.value === 200) {
      fetch()
      useDialogStore().closeDialog()
    }
  }

  return {
    sports,
    loading,
    form,
    fetch,
    openForm,
    submit,
  }
})
