<script setup lang="ts">
import { useHelloI18n } from "../composables/useHelloI18n"

// ローカルスコープにするなら毎回定義が必要
const { t } = useHelloI18n()
</script>

<template>
  <h1>
    <!-- <span>hello: </span> -->
    <span>
      {{ t("hello.msg") }}
    </span>
  </h1>

  <!-- key名が露呈 -->
  <!-- <p>{{ t("world.msg") }}</p> -->

  <!-- 存在しないkey -->
  <!-- <p>{{ t("hello.msg2") }}</p> -->

  <!-- グローバルスコープのメッセージ -->
  <p>{{ $t("global.hello") }}</p>
</template>
