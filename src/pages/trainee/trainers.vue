<script setup lang="ts">
import UserCard from '@/components/UserCard.vue'
import { useTrainersStore } from '@/stores/trainers'

const trainersStore = useTrainersStore()
const { trainers } = storeToRefs(trainersStore)
const { fetch } = trainersStore

fetch()
</script>

<template>
  <VCard :title="$t('trainers')">
    <VCardText>
      <VRow>
        <template
          v-for="trainer in trainers"
          :key="trainer.id"
        >
          <VCol cols="3">
            <UserCard :user="trainer" />
          </VCol>
        </template>
      </VRow>
    </VCardText>
  </VCard>
</template>
