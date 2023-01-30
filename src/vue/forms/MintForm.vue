<template>
  <form class="mint-form" @submit.prevent="submit">
    <input-field
        placeholder="Amount tokens"
        type="number"
        step="0.01"
        v-model.number="data.amountTokens"
        :errorMsg="errorMsg"
        class="mint-form__input"
    />
    <app-button text="Mint" class="mint-form__btn" scheme="secondary"/>
  </form>
</template>

<script setup>
import InputField from "@/vue/fields/InputField.vue";
import AppButton from "@/vue/common/AppButton.vue";
import { useAccountStore } from "@/store/accountStore.ts";
import { computed, reactive } from "vue";
import { validationConst } from "@/ts/const/validation.const.ts";
import { useVuelidate } from '@vuelidate/core'
import { required, maxValue, minValue } from '@vuelidate/validators'

const accountStore = useAccountStore()

const data = reactive({
  amountTokens: ''
})
const rules = {
  amountTokens: {
    required,
    minValue: minValue(validationConst.minValueTransaction),
    maxValue: maxValue(validationConst.maxValueTransaction)
  }
}

const v$ = useVuelidate(rules, data)

const errorMsg = computed(() => v$.value.$errors.length ? v$.value.$errors : '')

const submit = async () => {
  const result = await v$.value.$validate()
  if (result) {
    await accountStore.mint(data.amountTokens)
  }
}
</script>

<style lang="scss" scoped>
.mint-form {
  display: flex;
}

.mint-form__input {
  margin-right: 7rem;
}

.mint-form__btn {
  margin-top: 0.6rem;
}
</style>
