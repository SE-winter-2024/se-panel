<script lang="ts" setup>
import Avatar2 from '@images/avatars/avatar-2.png'
</script>

<template>
  <VRow>
    <VCol cols="4">
      <VCard>
        <VCardText>
          <div class="d-flex flex-column align-center">
            <div style="width: 140px">
              <VImg
                :src="Avatar2"
                class="rounded"
              />
            </div>
            <div class="mt-4 text-h4">
              user.name
            </div>
          </div>

          <VDivider class="my-4" />

          <VRow>
            <VCol
              cols="5"
              class="font-weight-bold"
            >
              {{ $t('email') }}:
            </VCol>
            <VCol cols="7">
              some@email.com
            </VCol>

            <VCol
              cols="5"
              class="font-weight-bold"
            >
              {{ $t('status') }}:
            </VCol>
            <VCol cols="7">
              <VChip
                color="success"
                label
              >
                {{ $t('active') }}
              </VChip>
            </VCol>

            <VCol
              cols="5"
              class="font-weight-bold"
            >
              {{ $t('coach-experience') }}:
            </VCol>
            <VCol cols="7">
              7 years
            </VCol>
          </VRow>

          <div class="d-flex justify-center mt-8">
            <div class="d-flex">
              <VBtn class="me-2">
                {{ $t('edit') }}
              </VBtn>
              <VBtn
                color="error"
                variant="tonal"
              >
                {{ $t('report') }}
              </VBtn>
            </div>
          </div>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="8">
      <VCard class="mb-4">
        <VCardText>
          <div class="d-flex justify-space-between align-center">
            <div class="text-h3">
              {{ $t('sports') }}
            </div>
            <div>
              <VIcon
                icon="tabler-edit"
                class="cursor-pointer"
              />
            </div>
          </div>
        </VCardText>

        <VCardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facere accusantium impedit consequuntur ea reprehenderit fuga ipsam similique, error, quas deleniti quaerat expedita mollitia dolore dolor, tenetur fugiat natus optio.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facere accusantium impedit consequuntur ea reprehenderit fuga ipsam similique, error, quas deleniti quaerat expedita mollitia dolore dolor, tenetur fugiat natus optio.
        </VCardText>
      </VCard>

      <VCard class="mb-4">
        <VCardText>
          <div class="d-flex justify-space-between align-center">
            <div class="text-h3">
              {{ $t('achivments') }}
            </div>
            <div>
              <VIcon
                icon="tabler-edit"
                class="cursor-pointer"
              />
            </div>
          </div>
        </VCardText>

        <VCardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facere accusantium impedit consequuntur ea reprehenderit fuga ipsam similique, error, quas deleniti quaerat expedita mollitia dolore dolor, tenetur fugiat natus optio.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facere accusantium impedit consequuntur ea reprehenderit fuga ipsam similique, error, quas deleniti quaerat expedita mollitia dolore dolor, tenetur fugiat natus optio.
        </VCardText>
      </VCard>

      <VCard class="mb-4">
        <VCardText>
          <div class="d-flex justify-space-between align-center">
            <div class="text-h3">
              {{ $t('education') }}
            </div>
            <div>
              <VIcon
                icon="tabler-edit"
                class="cursor-pointer"
              />
            </div>
          </div>
        </VCardText>

        <VCardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facere accusantium impedit consequuntur ea reprehenderit fuga ipsam similique, error, quas deleniti quaerat expedita mollitia dolore dolor, tenetur fugiat natus optio.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facere accusantium impedit consequuntur ea reprehenderit fuga ipsam similique, error, quas deleniti quaerat expedita mollitia dolore dolor, tenetur fugiat natus optio.
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
