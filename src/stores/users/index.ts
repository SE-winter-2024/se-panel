export const useUsersStore = defineStore('users', () => {
  const users = ref([])

  const fetch = async () => {
    const res = await useApi('admin/users').get()

    if (res.statusCode.value === 200) {
      users.value = res.data.value
      console.log(users.value)
    }
  }

  return {
    users,
    fetch,
  }
})
