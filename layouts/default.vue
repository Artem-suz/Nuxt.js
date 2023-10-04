<template>
  <TheHeader />
  <main class="main">
    <div class="container">
      <div class="main__wrapper">
        <slot />
      </div>
    </div>
  </main>

  <TheFooter />
</template>

<style lang="scss">
@import "@/assets/style.scss";
</style>
