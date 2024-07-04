<script setup lang="ts">
const tab = ref('sat')
</script>

<template>
  <VCard>
    <VCardText>
      <VTabs v-model="tab">
        <VTab value="sat">
          Saturday
        </VTab>
        <VTab value="sun">
          Sunday
        </VTab>
        <VTab value="fri">
          Friday
        </VTab>
      </VTabs>

      <VWindow v-model="tab">
        <VWindowItem value="sat">
          <VContainer fluid>
            <VExpansionPanels
              class="my-4"
              variant="popout"
            >
<VExpansionPanel
                v-for="i in 3"
                :key="i"
              >
                <VExpansionPanelTitle>
                  Sport activity {{ i }}
                </VExpansionPanelTitle>
                <VExpansionPanelText>
                  <VRow>
                    <VCol cols="3" />
                    <VCol cols="3" />
                    <VCol cols="6">
                      <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/X2iy7d_89tI?si=R7zpuRn7imeWl831"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      />
                    </VCol>
                  </VRow>
                </VExpansionPanelText>
              </VExpansionPanel>
            </VExpansionPanels>
          </VContainer>
        </VWindowItem>
        <VWindowItem value="sun">
          <VContainer fluid>
            <VExpansionPanels
              class="my-4"
              variant="popout"
            >
<VExpansionPanel
                v-for="i in 5"
                :key="i"
              >
                <VExpansionPanelTitle>
                  Sport activity {{ i }}
                </VExpansionPanelTitle>
                <VExpansionPanelText>
                  <VRow>
                    <VCol cols="3" />
                    <VCol cols="3" />
                    <VCol cols="6">
                      <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/X2iy7d_89tI?si=R7zpuRn7imeWl831"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      />
                    </VCol>
                  </VRow>
                </VExpansionPanelText>
              </VExpansionPanel>
            </VExpansionPanels>
          </VContainer>
        </VWindowItem>
        <VWindowItem value="fri">
          <VContainer fluid>
            <VExpansionPanels
              class="my-4"
              variant="popout"
            >
              <VExpansionPanel
                v-for="i in 4"
                :key="i"
              >
                <VExpansionPanelTitle>
                  Sport activity {{ i }}
                </VExpansionPanelTitle>
                <VExpansionPanelText>
                  <VRow>
                    <VCol cols="3" />
                    <VCol cols="3" />
                    <VCol cols="6">
                      <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/X2iy7d_89tI?si=R7zpuRn7imeWl831"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      />
                    </VCol>
                  </VRow>
                </VExpansionPanelText>
              </VExpansionPanel>
            </VExpansionPanels>
          </VContainer>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
