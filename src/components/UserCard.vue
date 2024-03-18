<script setup lang="ts">
interface Props {
  user: {
    name: string
    id: number
  }
}

defineProps<Props>()
</script>

<template>
  <VCard>
    <VImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pef1Pll8TzPHdfiCMfV8zbilupZJUQJdX34CSqvAiA&s" />
    <VCardText>
      <div class="text-center text-lg">
        {{ user.name }}
      </div>
      <div class="d-flex mt-4">
        <VBtn
          variant="outlined"
          class="me-1"
          :to="`/profile/${user.id}`"
        >
          {{ $t('view-profile') }}
        </VBtn>
        <VBtn
          variant="outlined"
          class="ms-1"
        >
          {{ $t('view-program') }}
        </VBtn>
      </div>
    </VCardText>
  </VCard>
</template>
