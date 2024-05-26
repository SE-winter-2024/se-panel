<script setup lang="ts">
import { useRequestForm } from '@/stores/forms/request-form'

const requestForm = useRequestForm()
const { trainerName, form } = storeToRefs(requestForm)
const { submit } = requestForm

const days = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
]
</script>

<template>
  <VCard :title="$t('request-ask', [trainerName])">
    <VCardText>
      <VRow>
        <VCol cols="12">
          <VTextarea
            v-model="form.description"
            :label="$t('description')"
          />
        </VCol>
        <VCol cols="12">
          <div class="text-h5 mb-2">
            {{ $t('active-days') }}
          </div>
          <div class="d-flex">
            <template
              v-for="(day, i) in days"
              :key="i"
            >
              <VCheckbox
                v-model="form.activeDays[i]"
                class="me-6"
                :label="$t(day)"
              />
            </template>
          </div>
        </VCol>
        <VCol cols="12">
          <VBtn block @click="() => submit()">
            {{ $t('send') }}
          </VBtn>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
