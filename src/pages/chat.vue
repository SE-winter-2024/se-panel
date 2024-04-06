<script lang="ts" setup>
import Avatar3 from '@images/avatars/avatar-3.png'
import Avatar6 from '@images/avatars/avatar-6.png'
import Avatar9 from '@images/avatars/avatar-9.png'
</script>

<template>
  <VCard style="height: calc(100vh - 180px);">
    <VRow
      no-gutters
      class="h-100"
    >
      <VCol cols="4">
        <div class="chat-head-height pa-4">
          <VTextField
            class="rounded-pill-input"
            prepend-inner-icon="tabler-search"
            :label="$t('search')"
            size="sm"
          />
        </div>
        <VDivider />
        <div class="overflow-auto pa-2">
          <div class="d-flex align-center pa-2 border rounded mb-2 bg-light-primary cursor-pointer">
            <VAvatar
              size="54"
              class="me-4"
            >
              <VImg :src="Avatar6" />
            </VAvatar>
            <div class="w-100">
              <div class="d-flex justify-space-between">
                <div class="font-weight-bold text-h5 mb-1">
                  Alireza
                </div>
                <div class="font-weight-thin text-grey-500">
                  8 min ago
                </div>
              </div>
              <div class="text-grey-600">
                this will be the preview of the message
              </div>
            </div>
          </div>
          <div class="d-flex align-center pa-2 border rounded mb-2 cursor-pointer">
            <VAvatar
              size="54"
              class="me-4"
            >
              <VImg :src="Avatar9" />
            </VAvatar>
            <div class="w-100">
              <div class="d-flex justify-space-between">
                <div class="font-weight-bold text-h5 mb-1">
                  Mostafa
                </div>
                <div class="font-weight-thin text-grey-500">
                  18 min ago
                </div>
              </div>
              <div class="text-grey-600">
                this will be the preview of the message
              </div>
            </div>
          </div>
        </div>
      </VCol>
      <VDivider vertical />
      <VCol cols="8">
        <div class="chat-head-height d-flex align-center pa-4">
          <VAvatar>
            <VImg :src="Avatar3" />
          </VAvatar>
          <RouterLink
            class="ms-4 text-lg text-grey-600"
            to="/profile/1"
          >
            Mohammad
          </RouterLink>
        </div>
        <VDivider />
        daffsfa
      </VCol>
    </VRow>
  </VCard>
</template>

<style scoped lang="scss">
.chat-head-height {
  height: 70px;
}
</style>
