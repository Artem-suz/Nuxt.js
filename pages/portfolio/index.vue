<template>
  <Head>
    <Title>Prtfolio</Title>
  </Head>
  <h1 class="main__title">Портфель криптовалют</h1>
          <div class="portfolio">
            <table class="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Монета</th>
                  <th>Тикер</th>
                  <th>Кол-во</th>
                  <th>Цена $</th>
                  <th>Текущий курс</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <th>Bitcoin</th>
                  <th>BTC</th>
                  <th>3</th>
                  <th>7288.00</th>
                  <th>7288.00</th>
                </tr>
                <tr>
                  <th>2</th>
                  <th>Ethereum</th>
                  <th>ETH</th>
                  <th>9</th>
                  <th>7288.00</th>
                  <th>7288.00</th>
                </tr>
                <tr>
                  <th>3</th>
                  <th>EOS</th>
                  <th>EOS</th>
                  <th>4</th>
                  <th>7288.00</th>
                  <th>7288.00</th>
                </tr>
              </tbody>
            </table>

            <h2 class="portfolio__title">Текущая стоимость портфеля</h2>
            <div class="total-cost">
              <div class="total-cost__column bg-numbers">
                <div class="total-cost__item">
                  <div class="total-cost__value">66759.48</div>
                  <div class="total-cost__currency">USD</div>
                </div>
                <div class="total-cost__item">
                  <div class="total-cost__value">9.02</div>
                  <div class="total-cost__currency">BTC</div>
                </div>
                <div class="total-cost__item">
                  <div class="total-cost__value">117.5</div>
                  <div class="total-cost__currency">ETH</div>
                </div>
              </div>
              <div class="total-cost__column">
                <div class="total-cost__diagram"></div>
              </div>
            </div>
          </div>
</template>