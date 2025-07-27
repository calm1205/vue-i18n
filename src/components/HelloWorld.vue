<script setup lang="ts">
import { useI18n } from "vue-i18n"

const { t } = useI18n({
  messages: {
    ja: {
      msg: "こんにちは, 世界",
    },
    en: {
      msg: "Hello, world!",
    },
  },
})
</script>

<template>
  <h1>{{ t("msg") }}</h1>
</template>

<style scoped></style>
