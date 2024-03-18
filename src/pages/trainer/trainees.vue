<script setup lang="ts">
import UserCard from '@/components/UserCard.vue'

const users = [
  { name: 'mohammad', id: 1 },
  { name: 'Arian', id: 5 },
  { name: 'hesam', id: 4 },
  { name: 'mostafa', id: 3 },
  { name: 'mahdie', id: 2 },
]
</script>

<template>
  <VCard :title="$t('trainees')">
    <VCardText>
      <VRow>
        <template
          v-for="user in users"
          :key="user.id"
        >
          <VCol cols="3">
            <UserCard :user="user" />
          </VCol>
        </template>
      </VRow>
    </VCardText>
  </VCard>
</template>
