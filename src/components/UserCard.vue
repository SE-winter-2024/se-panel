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
        {{ user.first_name }} {{ user.last_name }}
      </div>
      <VRow class="mt-4">
        <VCol>
          <VBtn
            block
            variant="outlined"
            :to="`/profile/${user.id}`"
          >
            {{ $t('profile') }}
          </VBtn>
        </VCol>
        <VCol>
          <VBtn
            block
            variant="outlined"
          >
            {{ $t('request') }}
          </VBtn>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
