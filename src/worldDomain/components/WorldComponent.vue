<script setup lang="ts">
import { useWorldI18n } from "../composables/useWorldI18n"

const { t } = useWorldI18n()
</script>

<template>
  <h1>
    <!-- <span>world: </span> -->
    <span> {{ t("world.msg") }} </span>
  </h1>
</template>
