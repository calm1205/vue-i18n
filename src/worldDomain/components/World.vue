<script setup lang="ts">
import { useWorldI18n } from "../composables/useWorldI18n"

const { t } = useWorldI18n()
</script>

<template>
  <h1>{{ t("msg") }}</h1>
  <p>{{ t("msg") }}</p>
</template>

<style scoped></style>
