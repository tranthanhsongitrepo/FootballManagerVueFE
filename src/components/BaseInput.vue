<template xmlns:update="http://www.w3.org/1999/xhtml">
  <label>{{ label }}</label>
  <input
      v-bind="$attrs"
      :placeholder="label"
      class="field"
      :value="modelValue"
      v-model="$attrs"
  >
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    label: {
      type: String,
      default: ""
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    emits: {
      update: 'modelValue'
    }
  }
}
</script>

<style scoped>

</style>