<template>
  <Head>
    <Title>Buy</Title>
    <h1 class="main__title">Купить криптовалюту</h1>
          <form class="exchanger">
            <div class="exchanger__description">1 BTC ≈ 23 878.20 USD</div>
            <div class="exchanger__row">
              <div class="exchanger__column">
                <h4 class="exchanger__input-title">Списать</h4>
                <div class="exchanger__input-wrapper">
                  <input
                    class="exchanger__input"
                    type="number"
                    placeholder="15.00 - 12500.00"
                  />
                  <span class="exchanger__select-coin">
                    <img
                      src="../../public/logo.png"
                      alt="currency"
                      title="currency"
                    />
                    <span>USD</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div class="exchanger__column">
                <h4 class="exchanger__input-title">Получить</h4>
                <div class="exchanger__input-wrapper">
                  <input
                    class="exchanger__input"
                    type="number"
                    placeholder="0.00"
                  />
                  <span class="exchanger__select-coin">
                    <img
                      src="../../public/logo.png"
                      alt="cryptocurrency"
                      title="cryptocurrency"
                    />
                    <span>BTC</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <button class="exchanger__btn">Купить</button>
            </div>
          </form>
  </Head>
</template>