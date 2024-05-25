import type { User } from '@/types'

export const useAuthStore = defineStore('auth-store', () => {
  const user = ref({} as User)

  const fetch = async () => {
    user.value = JSON.parse(localStorage.getItem('fit-user') ?? '{}')

  }

  return {
    user,
    fetch,
  }
})
