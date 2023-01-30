<template>
  <div class="input-field">
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :step="step"
        class="input-field__input"
        :type="type"
        :placeholder="placeholder"
    >
    <div v-for="error in errorMsg" class="input-field__errors">
      <span class="input-field__error">
        {{ error.$message }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
      placeholder: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      modelValue: {
        type: [String, Number],
      },
      errorMsg: {
        type: [String],
      },
      step: {
        type: String
      }
    }
)
defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.input-field {
  width: 50rem;
  font-size: 2rem;
}

.input-field__input {
  width: 100%;
  font-size: 2rem;
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
}

.input-field__errors {
  margin-top: 2rem;
}

.input-field__error {
  color: $input-field-error;
}
</style>
