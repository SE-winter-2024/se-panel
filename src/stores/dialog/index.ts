import type { DefineComponent } from 'vue'
import RequestForm from '@/components/forms/RequestForm.vue'

const components = {
  'request-form': RequestForm,
}

export const useDialogStore = defineStore('dialog', () => {
  const isOpen = ref(false)
  const width = ref('80%')
  const component = shallowRef(null as DefineComponent<{}, {}, any> | null)

  const openDialog = (type: keyof typeof components, newWidth = '80%') => {
    component.value = components[type]
    width.value = newWidth
    isOpen.value = true
  }

  const closeDialog = () => {
    isOpen.value = false
  }

  return {
    isOpen,
    width,
    component,
    openDialog,
    closeDialog,
  }
})
