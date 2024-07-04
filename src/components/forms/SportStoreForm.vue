<script setup lang="ts">
import { useSportsStore } from '@/stores/sports'

const sportsStore = useSportsStore()
const { form } = storeToRefs(sportsStore)
const { submit } = sportsStore
</script>

<template>
  <VCard title="Add Sport">
    <VCardText>
      <VRow>
        <VCol cols="12">
          <VTextField
            v-model="form.title"
            label="Title"
          />
        </VCol>
        <VCol cols="12">
          <VTextField
            v-model="form.video_path"
            label="Video Path"
          />
        </VCol>
        <VCol cols="12">
          <VTextarea
            v-model="form.description"
            label="Description"
          />
        </VCol>
        <VCol cols="12">
          <VBtn
            block
            @click="() => submit()"
          >
            Submit
          </VBtn>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
