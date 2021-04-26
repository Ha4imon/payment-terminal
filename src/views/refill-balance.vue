<template>
  <div class="refill">
    <b class="refill__title">{{ $route.params.slug }}</b>
    <form action="" class="form-refill" @submit.prevent="sumbitFormHandler">
      <div class="form-refill__field">
        <label class="form-refill__label" for="phoneForBalance"
          >Ваш телефон:
        </label>
        <input
          id="phoneForBalance"
          class="form-refill__input"
          :class="{ 'form-refill__input--error': v$.form.phone.$error }"
          type="text"
          v-mask="form.maskPhone"
          :placeholder="form.maskPhone"
          :value="form.phone"
          @change="setPhone($event.target.value)"
        />
      </div>
      <div class="form-refill__field">
        <label class="form-refill__label" for="sumForBalance"
          >Сумма пополнения:
        </label>
        <input
          id="sumForBalance"
          class="form-refill__input"
          :class="{ 'form-refill__input--error': v$.form.sum.$error }"
          type="number"
          placeholder="От 1 до 1000"
          :value="form.sum"
          @change="setSum($event.target.value)"
        />
      </div>
      <button class="form-refill__btn" type="submit">Пополнить</button>
    </form>

    <p
      v-if="request"
      class="form-refill__message"
      :class="[
        isRequestSuccess
          ? 'form-refill__message--success'
          : 'form-refill__message--error',
      ]"
    >
      {{ request.message }}
    </p>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, between } from "@vuelidate/validators";
import { fakeRequest } from "@/utils/fakeRequest";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data: () => ({
    form: {
      phone: "",
      maskPhone: "8 (###) ###-##-##",
      sum: "",
    },
    request: null,
  }),
  validations() {
    return {
      form: {
        phone: {
          required,
          minLength: minLength(this.form.maskPhone.length),
        },
        sum: {
          required,
          between: between(0, 1000),
        },
      },
    };
  },
  computed: {
    isRequestSuccess() {
      return this.request.isSucess;
    },
  },
  methods: {
    setPhone(value) {
      this.form.phone = value;
      this.v$.form.phone.$touch();
    },
    setSum(value) {
      this.form.sum = value;
      this.v$.form.sum.$touch();
    },
    sumbitFormHandler() {
      this.v$.form.$touch();
      if (!this.v$.form.$error) {
        const data = {
          operatorId: this.$route.query.id,
          phone: this.form.phone,
          sum: this.form.sum,
        };

        new Promise((resolve) => {
          setTimeout(() => {
            resolve(fakeRequest(data));
          }, 2000);
        }).then((data) => {
          this.request = data;
        });
      }
    },
  },
  watch: {
    request: function (val) {
      if (val.isSucess === true) {
        setTimeout(() => {
          this.$router.push({ path: "/" });
        }, 2500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.refill {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
}

.refill__title {
  color: $greenDark;
  font-size: 26px;
  text-align: center;
  display: block;
  margin-bottom: 30px;
}

.form-refill {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
}

.form-refill__field {
  margin-bottom: 20px;
}

.form-refill__label {
  cursor: pointer;
  font-size: 16px;
  display: block;
  margin-bottom: 5px;
}

.form-refill__input {
  border: 1px solid black;
  padding: 5px 10px;

  &--error {
    border: 1px solid $red;
    animation-name: error;
    animation-iteration-count: 3;
    animation-duration: 0.2s;
  }
}

@keyframes error {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}

.form-refill__btn {
  background-color: $green;
  border: 1px solid $green;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #fff;
    color: $green;
  }
}

.form-refill__message {
  text-align: center;

  &--success {
    color: $green;
  }

  &--error {
    color: $red;
  }
}
</style>
