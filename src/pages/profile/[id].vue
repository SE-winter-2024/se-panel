<script lang="ts" setup>
import Avatar2 from '@images/avatars/avatar-2.png'
import { useProfileStore } from '@/stores/profile'
import { router } from '@/plugins/1.router'

const id = router.currentRoute.value.params.id

const profileStore = useProfileStore()
const { user, profile, currentType, traineeChange } = storeToRefs(profileStore)
const { fetch, setId } = profileStore

setId(Number(id))

fetch()
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
              {{ user.FirstName }} {{ user.LastName }}
            </div>
            <div class="text-h6">
              {{ $t(user.InfoType ?? '') }}
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
              {{ user.Email }}
            </VCol>

            <VCol
              cols="5"
              class="font-weight-bold"
            >
              {{ $t('status') }}:
            </VCol>
            <VCol cols="7">
              <VChip
                :color="user.Block ? 'error' : 'success'"
                label
              >
                {{ user.Block ? $t('block') : $t('active') }}
              </VChip>
            </VCol>

            <VCol
              cols="5"
              class="font-weight-bold"
            >
              {{ $t('gender') }}:
            </VCol>
            <VCol cols="7">
              {{ $t(user.Gender ?? '') }}
            </VCol>

            <VCol
              cols="5"
              class="font-weight-bold"
            >
              {{ $t('phone-number') }}:
            </VCol>
            <VCol cols="7">
              {{ user.PhoneNumber }}
            </VCol>

            <VCol
              cols="5"
              class="font-weight-bold"
            >
              {{ $t('age') }}:
            </VCol>
            <VCol cols="7">
              {{ user.Age }}
            </VCol>

            <template v-if="profile.Height">
              <VCol
                cols="5"
                class="font-weight-bold"
              >
                {{ $t('height') }}:
              </VCol>
              <VCol cols="7">
                {{ profile.Height }} cm
              </VCol>
            </template>

            <template v-if="profile.Weight">
              <VCol
                cols="5"
                class="font-weight-bold"
              >
                {{ $t('weight') }}:
              </VCol>
              <VCol cols="7">
                {{ profile.Weight }} kg
              </VCol>
            </template>
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
      <template v-if="user.InfoType === 'trainee'">
        <VCard class="mb-4">
          <VCardText>
            <div class="d-flex justify-space-between align-center">
              <div class="text-h3">
                {{ $t('medical-history') }}
              </div>
              <div>
                <VIcon
                  v-if="!traineeChange.medicalHistory.edit"
                  icon="tabler-edit"
                  class="cursor-pointer"
                  @click="() => traineeChange.medicalHistory.edit = true"
                />
                <div
                  v-else
                  class="d-flex"
                >
                  <VIcon
                    icon="tabler-check"
                    class="cursor-pointer me-2"
                    color="success"
                  />
                  <VIcon
                    icon="tabler-x"
                    class="cursor-pointer"
                    color="error"
                    @click="() => traineeChange.medicalHistory.edit = false"
                  />
                </div>
              </div>
            </div>
          </VCardText>

          <VCardText>
            <div v-if="!traineeChange.medicalHistory.edit">
              {{ profile.MedicalHistory }}
            </div>
            <div v-else>
              <VTextarea
                v-model="traineeChange.medicalHistory.value"
                outlined
                rows="5"
              />
            </div>
          </VCardText>
        </VCard>

        <VCard class="mb-4">
          <VCardText>
            <div class="d-flex justify-space-between align-center">
              <div class="text-h3">
                {{ $t('sport-history') }}
              </div>
              <div>
                <VIcon
                  v-if="!traineeChange.sports.edit"
                  icon="tabler-edit"
                  class="cursor-pointer"
                  @click="() => traineeChange.sports.edit = true"
                />
                <div
                  v-else
                  class="d-flex"
                >
                  <VIcon
                    icon="tabler-check"
                    class="cursor-pointer me-2"
                    color="success"
                  />
                  <VIcon
                    icon="tabler-x"
                    class="cursor-pointer"
                    color="error"
                    @click="() => traineeChange.sports.edit = false"
                  />
                </div>
              </div>
            </div>
          </VCardText>

          <VCardText>
            <div v-if="!traineeChange.sports.edit">
              {{ profile.Sports }}
            </div>
            <div v-else>
              <VTextarea
                v-model="traineeChange.sports.value"
                outlined
                rows="5"
              />
            </div>
          </VCardText>
        </VCard>
      </template>
    </VCol>
  </VRow>
</template>
