<template>
  <button v-bind="$attrs"><slot /></button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    label: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped>

</style>