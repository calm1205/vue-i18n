<script setup lang="ts">
import { useI18n } from "vue-i18n"
import ja from "../../i18n/ja.json"
import en from "../../i18n/en.json"

type MessageSchema = typeof ja

const { t } = useI18n<{ message: MessageSchema }, "ja" | "en">({
  messages: { ja, en },
})
</script>

<template>
  <h1>{{ t("msg") }}</h1>
  <p>{{ t("msg") }}</p>
</template>

<style scoped></style>
