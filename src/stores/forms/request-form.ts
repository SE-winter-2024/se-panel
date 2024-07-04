import { useDialogStore } from '../dialog'

const emptyForm = () => ({
  description: '',
  activeDays: [false, false, false, false, false, false, false],
})

export const useRequestForm = defineStore('request-form', () => {
  const form = ref(emptyForm())
  const trainerId = ref(0)
  const trainerName = ref('')
  const loading = ref(false)

  const openDialog = (id: number, name: string) => {
    form.value = emptyForm()

    trainerId.value = id
    trainerName.value = name

    useDialogStore().openDialog('request-form')
  }

  const submit = async () => {
    loading.value = true

    const res = await useApi('trainee/request').post({
      trainerID: trainerId.value,
      description: form.value.description,
      active_days: form.value.activeDays,
    })

    if (res.statusCode.value === 200)
      useDialogStore().closeDialog()

    loading.value = false
  }

  return {
    form,
    openDialog,
    trainerName,
    submit,
    loading,
  }
})
