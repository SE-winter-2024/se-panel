import { router } from '@/plugins/1.router'
import { TOKEN_NAME } from '@/types'

const emptyForm = () => ({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  gender: null,
  age: '',
  phone_number: '',
  info_type: 'trainee',
})

export const useSignUpForm = defineStore('sign-up-form', () => {
  const form = ref(emptyForm())
  const loading = ref(false)

  const submit = async () => {
    loading.value = true

    const res = await useApi<{ token: string; user: User }>('/user/sign-up').post({ ...form.value, age: Number(form.value.age) })

    if (res.statusCode.value === 200) {
      localStorage.setItem(TOKEN_NAME, res.data.value?.jwt ?? '')
      localStorage.setItem('fit-user', JSON.stringify(res.data.value) ?? '')
      router.push('/')
    }

    loading.value = false
  }

  return {
    form,
    loading,
    submit,
  }
})
