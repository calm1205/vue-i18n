<script setup lang="ts">
import { useI18n } from "vue-i18n"
import Hello from "./helloDomain/components/Hello.vue"
import World from "./worldDomain/components/World.vue"

const { t } = useI18n()
</script>

<template>
  <p>{{ t("hello") }}</p>
  <Hello />
  <World />
</template>
