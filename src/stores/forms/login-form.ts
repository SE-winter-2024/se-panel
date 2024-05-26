import { router } from '@/plugins/1.router'
import type { User } from '@/types'
import { TOKEN_NAME } from '@/types'

const emptyForm = () => ({
  email: '',
  password: '',
})

export const useLoginForm = defineStore('login-form', () => {
  const form = ref(emptyForm())
  const loading = ref(false)

  const submit = async () => {
    loading.value = true

    const res = await useApi<{ token: string; user: User }>('/user/login').post(form.value)

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
