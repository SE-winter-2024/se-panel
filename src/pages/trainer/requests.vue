<script lang="ts" setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
import { useRequestsStore } from '@/stores/requests/trainer'

const { t } = useI18n()

const headers = [
  { title: t('trainee'), key: 'trainee', align: 'left' },
  { title: t('date'), key: 'date', align: 'left' },
  { title: t('payment'), key: 'payment', align: 'left' },
  { title: t('status'), key: 'status', align: 'left' },
  { title: t('actions'), key: 'actions', align: 'left' },
]

const requestsStore = useRequestsStore()
const { requests, loading } = storeToRefs(requestsStore)
const { fetch } = requestsStore

fetch()

const getColor = (status: string) => {
  if (status === 'pending')
    return 'warning'

  if (status === 'rejected')
    return 'error'

  if (status === 'approved')
    return 'success'

  return 'primary'
}
</script>

<template>
  <VCard :title="$t('requests')">
    <VCardText>
      <VDataTable
        :headers="headers"
        :loading="loading"
        :items="requests"
      >
        <template #loading>
          <VSkeletonLoader type="table-row@6" />
        </template>
        <template #item.trainee="{ item }">
          <div class="d-flex align-center">
            <VAvatar>
              <VImg :src="item.trainee.avatar" />
            </VAvatar>
            <div class="ms-4">
              {{ item.trainee.name }}
            </div>
          </div>
        </template>
        <template #item.payment="{ item }">
          <div>
            $ {{ item.payment }}
          </div>
        </template>
        <template #item.status="{ item }">
          <VChip :color="getColor(item.status)">
            {{ $t(item.status) }}
          </VChip>
        </template>
        <template #item.actions>
          <VMenu>
            <template #activator="{ props }">
              <VIcon
                v-bind="props"
                icon="tabler-dots-vertical"
                class="cursor-pointer"
              />
            </template>
            <VList class="mt-2">
              <VListItem
                value="1"
                prepend-icon="tabler-check"
                :title="$t('approve')"
              />
              <VListItem
                value="2"
                prepend-icon="tabler-x"
                :title="$t('reject')"
              />
              <VListItem
                value="3"
                prepend-icon="tabler-coin"
                :title="$t('set-payment')"
              />
              <VListItem
                value="4"
                prepend-icon="tabler-info-circle"
                :title="$t('trainee-info')"
              />
              <VListItem
                value="5"
                prepend-icon="tabler-clipboard-text"
                :title="$t('program')"
              />
            </VList>
          </VMenu>
        </template>
        <template #bottom>
          <div />
        </template>
      </VDataTable>
    </VCardText>
  </VCard>
</template>
