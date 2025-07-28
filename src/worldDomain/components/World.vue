<script setup lang="ts">
import { useWorldI18n } from "../composables/useWorldI18n"

const { t } = useWorldI18n()
</script>

<template>
  <h1>World: {{ t("world.msg") }}</h1>
</template>
