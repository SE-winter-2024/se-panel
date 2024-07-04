<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
import { useUsersStore } from '@/stores/users'

const { t } = useI18n()

const headers = [
  { title: t('id'), key: 'ID', align: 'left' },
  { title: t('First Name'), key: 'FirstName', align: 'left' },
  { title: t('LastName'), key: 'LastName', align: 'left' },
  { title: t('Gender'), key: 'Gender', align: 'left' },
  { title: t('Type'), key: 'InfoType', align: 'left' },
  { title: t('Email'), key: 'Email', align: 'left' },
  { title: t('Phone Number'), key: 'PhoneNumber', align: 'left' },
]

const usersStore = useUsersStore()
const { users } = storeToRefs(usersStore)

usersStore.fetch()
</script>

<template>
  <VCard :title="$t('users')">
    <VCardText>
      <VDataTable
        :headers="headers"
        :loading="loading"
        :items="users"
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
