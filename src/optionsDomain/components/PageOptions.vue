<script>
import { useOptionsI18n } from "../composables/useOptionsI18n"
import ChildOptions from "./ChildOptions.vue"

export default {
  name: "Options",
  components: {
    ChildOptions,
  },
  created() {
    useOptionsI18n()
  },
}
</script>

<template>
  <h1>Options: {{ $t("options.msg") }}</h1>
  <ChildOptions />
</template>
