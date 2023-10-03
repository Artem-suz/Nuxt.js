<script></script>

<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <NuxtLink to="/" class="header__nav-link">Конвертер валют</NuxtLink>
          </li>
          <li class="header__nav-item">
            <NuxtLink to="/buy" class="header__nav-link">Купить криптовалюту</NuxtLink>
          </li>
          <li class="header__nav-item">
            <NuxtLink to="/portfolio" class="header__nav-link">Портфель</NuxtLink>
          </li>
        </ul>
        <span>10000000 $</span>
      </nav>
    </div>
  </header>
</template>

<style>
@import "@/assets/style.scss";
</style>