import { TOKEN_NAME } from '@/types'
import { createFetch } from '@vueuse/core'
import { destr } from 'destr'
import { useToast } from 'vue-toastification'

export const useApi = createFetch({
  baseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
  fetchOptions: {
    mode: 'cors',
    headers: {
      Accept: 'application/json',
    },
  },
  options: {
    refetch: true,
    async beforeFetch({ options }) {
      const accessToken = localStorage.getItem(TOKEN_NAME)

      if (accessToken) {
        options.headers = {
          ...options.headers,
          Authorization: `${accessToken}`,

        }
      }

      return { options }
    },
    afterFetch(ctx) {
      const { data, response } = ctx

      // Parse data if it's JSON

      let parsedData = null
      try {
        parsedData = destr(data)
      }
      catch (error) {
        console.error(error)
      }

      return { data: parsedData, response }
    },
    onFetchError(ctx) {
      const { data, response } = ctx

      // if (response?.status === 401)
      //   window.location.href = url(import.meta.env.VITE_LOGIN_URL, { to: `${window.location.origin}/login` })

      const parsedData = destr<{ message: string }>(data)
      if (parsedData?.message)
        useToast().error(parsedData.message)

      return ctx
    },
  },
})
