<script setup lang="ts">
import { useHelloI18n } from "../composables/useHelloI18n"

const { t } = useHelloI18n()
</script>

<template>
  <h1>{{ t("msg") }}</h1>
  <p>{{ t("msg") }}</p>
</template>

<style scoped></style>
