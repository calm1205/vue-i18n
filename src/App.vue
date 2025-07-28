<script setup lang="ts">
import Hello from "./helloDomain/components/Hello.vue"
import World from "./worldDomain/components/World.vue"
import PageOptions from "./optionsDomain/components/PageOptions.vue"
</script>

<template>
  <p>{{ $t("global.hello") }}</p>
  <Hello />
  <World />
  <PageOptions />
</template>
