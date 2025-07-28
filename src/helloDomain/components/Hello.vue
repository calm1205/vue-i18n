<script setup lang="ts">
import { useHelloI18n } from "../composables/useHelloI18n"

// ローカルスコープにするなら毎回定義が必要
const { t } = useHelloI18n()
</script>

<template>
  <h1>Hello: {{ t("hello.msg") }}</h1>

  <!-- key名が露呈 -->
  <!-- <p>{{ t("world.msg") }}</p> -->

  <!-- グローバルスコープのメッセージ -->
  <p>{{ $t("global.hello") }}</p>
</template>
