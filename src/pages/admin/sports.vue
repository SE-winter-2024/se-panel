<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
import { useSportsStore } from '@/stores/sports'

const { t } = useI18n()

const headers = [
  { title: t('Title'), key: 'title', align: 'left' },
  { title: t('Description'), key: 'description', align: 'left' },
]

const sportsStore = useSportsStore()
const { sports, loading } = storeToRefs(sportsStore)
const { fetch, openForm } = sportsStore

fetch()
</script>

<template>
  <VCard :title="$t('sports')">
    <template #title>
      <div class="d-flex justify-space-between align-center">
        <div class="text-h4">
          {{ $t('sports') }}
        </div>
        <div>
          <VBtn
            prepend-icon="tabler-plus"
            @click="() => openForm()"
          >
            Add Sport
          </VBtn>
        </div>
      </div>
    </template>
    <VCardText>
      <VDataTable
        :headers="headers"
        :loading="loading"
        :items="sports"
      >
        <template #loading>
          <VSkeletonLoader type="table-row@6" />
        </template>
        <template #bottom>
          <div />
        </template>
      </VDataTable>
    </VCardText>
  </VCard>
</template>
