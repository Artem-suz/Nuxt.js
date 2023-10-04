<script>
import {mapState, mapActions, mapGetters} from 'vuex'

export default {
  // computed: { ...mapState('users')},
  // methods: {...mapActions(['getExchancedCurrency'])},
  mounted() {
    console.log(this.$store.state.count);
    this.$store.dispatch('getExchancedCurrency')

  },
}
</script>

<template>
  <Head>
    <Title>Cryptocoin converter</Title>
  </Head>
  <h1 class="main__title">Конвертер криптовалют</h1>
  <form class="converter" action="#" method="get">
    <div class="coverter__column">
      <select class="sel-dropdown" name="coin-list">
        <option value="btc" class="sel-dropdown__item" selected>BTC</option>
        <option value="eth" class="sel-dropdown__item">ETH</option>
      </select>
      <input class="converter__input" type="number" name="convert_from_value" value="1" />
    </div>
    <div class="coverter__column arrows">
      <svg
        width="24"
        height="22"
        viewBox="0 0 24 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.75 10.75L18 12L24 6L18 0L16.75 1.25L20.5 5H0V7H20.5L16.75 10.75ZM7.25 11.25L6 10L0 16L6 22L7.25 20.75L3.5 17H24V15H3.5L7.25 11.25Z"
          fill="#202020"
        />
      </svg>
    </div>
    <div class="coverter__column">
      <select class="sel-dropdown" name="valuta-list">
        <option value="usd" class="sel-dropdown__item" selected>USD</option>
        <option value="rub" class="sel-dropdown__item">RUB</option>
      </select>

      <input class="converter__input" type="number" name="convert_to_value" value />
    </div>
  </form>

  <div class="course-schedule">
    <div class="course-schedule__header">
      <h2 class="course-schedule__title">График курсов для BTC - USD</h2>
      <p class="course-schedule__description">
        Значение конвертации для 1 BTC в 27484 USD. BeInCrypto в настоящее время использует
        следующий обменный курс 27484. Вы можете конвертировать BTC в другие валюты, такие как SOL,
        BUSD или USDC. Мы обновили курсы обмена на 2022/06/12 15:26. За последние 24 часа
        максимальный курс 1 BTC к USD составляет 28668.084, а самый низкий - 27330.675. Цена USD
        колебалась на -1.831% в течение последнего часа и изменялась на -514.97 в течение последних
        24 часов.
      </p>
    </div>
  </div>
</template>

<style></style>
