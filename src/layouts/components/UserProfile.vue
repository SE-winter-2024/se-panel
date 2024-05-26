<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

authStore.fetch()
</script>

<template>
  <div>
    <div class="cursor-pointer">
      <div>
        <div class="text-h6">
          {{ user.first_name }} {{ user.last_name }}
        </div>
        <div class="text-end">
          {{ $t(user.info_type) }}
        </div>
      </div>

      <!-- SECTION Menu -->
      <VMenu
        activator="parent"
        width="230"
        location="bottom end"
        offset="14px"
      >
        <VList>
          <VListItem
            link
            :to="`/profile/${user.ID}`"
          >
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-user-circle"
                size="22"
              />
            </template>

            <VListItemTitle>{{ $t('profile') }}</VListItemTitle>
          </VListItem>

          <VDivider class="my-2" />

          <!-- 👉 Logout -->
          <VListItem to="/login">
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-logout"
                size="22"
              />
            </template>

            <VListItemTitle>{{ $t('logout') }}</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </div>
  </div>
</template>
