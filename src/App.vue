<script setup lang="ts">
import { useI18n } from "vue-i18n"

import HelloWorld from "./components/HelloWorld/HelloWorld.vue"

const { t } = useI18n()
</script>

<template>
  <p>{{ t("hello") }}</p>
  <HelloWorld />
</template>

<style scoped></style>
