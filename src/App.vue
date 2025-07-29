<script setup lang="ts">
import HelloComponent from "./helloDomain/components/HelloComponent.vue"
import WorldComponent from "./worldDomain/components/WorldComponent.vue"
import PageOptionsComponent from "./optionsDomain/components/PageOptions.vue"
</script>

<template>
  <p>{{ $t("global.hello") }}</p>
  <HelloComponent />
  <WorldComponent />
  <PageOptionsComponent />
</template>
