<script>
import { useOptionsI18n } from "../composables/useOptionsI18n"
import ChildOptionsComponent from "./ChildOptions.vue"

export default {
  name: "PageOptions",
  components: {
    ChildOptionsComponent,
  },
  created() {
    useOptionsI18n()
  },
}
</script>

<template>
  <h1>
    <!-- <span>Options: </span> -->
    <span>
      {{ $t("options.msg") }}
    </span>
  </h1>
  <ChildOptionsComponent />
</template>
