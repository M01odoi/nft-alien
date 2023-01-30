<template>
  <form
      @submit.prevent="submit"
  >
    <input-field
        v-model="data.address"
        :errorMsg="v$.address.$error ? v$.address.$errors: ''"
        class="transfer-form__input"
        placeholder="Address"
    />
    <input-field
        v-model.number="data.amountTokens"
        type="number"
        step="0.01"
        :errorMsg="v$.amountTokens.$error ? v$.amountTokens.$errors: ''"
        class="transfer-form__input"
        placeholder="Amount tokens"
    />
    <app-button text="Send" scheme="primary"/>
  </form>
</template>

<script setup>
import InputField from "@/vue/fields/InputField.vue";
import AppButton from "@/vue/common/AppButton.vue";
import { reactive } from "vue";
import { useAccountStore } from "@/store/accountStore.ts";
import { validationConst } from "@/ts/const/validation.const.ts";
import { useVuelidate } from '@vuelidate/core'
import { required, maxValue, helpers, minValue } from '@vuelidate/validators'

const accountStore = useAccountStore()

const data = reactive({
  address: '',
  amountTokens: '',
})

const requiredLength = (value) => value.length === validationConst.metamaskAddressLength


const rules = {
  amountTokens: {
    required,
    minValue: minValue(validationConst.minValueTransaction),
    maxValue: maxValue(validationConst.maxValueTransaction)
  },
  address: {
    required, requiredLength: helpers.withMessage(
        'Length of MetaMask address 42 symbols!', requiredLength
    )
  }
}

const v$ = useVuelidate(rules, data)
const submit = async () => {
  const result = await v$.value.$validate()
  if (result) {
    await accountStore.transferTo(data.address, data.amountTokens)
  }
}
</script>

<style lang="scss" scoped>
.transfer-form__input {
  margin-bottom: 4rem;
}
</style>
