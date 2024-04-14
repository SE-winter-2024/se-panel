const emptyForm = () => ({
  email: '',
  password: '',
})

export const useLoginForm = defineStore('login-form', () => {
  const form = ref(emptyForm())
  const loading = ref(true)

  const submit = async () => {
    loading.value = true

    const res = await useApi('/user/login').post(form.value)

    console.log(res.data)

    loading.value = false
  }

  return {
    form,
    loading,
    submit,
  }
})
