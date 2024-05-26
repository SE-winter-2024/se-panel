import { useDialogStore } from '../dialog'

const emptyForm = () => ({
  description: '',
  activeDays: [false, false, false, false, false, false, false],
})

export const useRequestForm = defineStore('request-form', () => {
  const form = ref(emptyForm())
  const trainerId = ref(0)
  const trainerName = ref('')

  const openDialog = (id: number, name: string) => {
    trainerId.value = id
    trainerName.value = name

    useDialogStore().openDialog('request-form')
  }

  const submit = async () => {
    useApi('trainee/request').post({
      trainerID: trainerId.value,
      description: form.value.description,
      active_days: form.value.activeDays,
    })
  }

  return {
    form,
    openDialog,
    trainerName,
    submit,
  }
})
