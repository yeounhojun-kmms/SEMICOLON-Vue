<template>
  <nav class="navigation-links-nav" v-bind:class="rootClassName">
    <a
      href="https://50th.wavinn.me/cand.html"
      target="_blank"
      rel="noreferrer noopener"
      class="navigation-links-link"
    >
      {{ text1 }}
    </a>
    <a
      href="https://50th.wavinn.me/promise.html"
      class="navigation-links-link1 navbar"
    >
      {{ text2 }}
    </a>
    <a
      href="https://50th.wavinn.me/brand.html"
      class="navigation-links-link2 navbar"
    >
      {{ text3 }}
    </a>
  </nav>
</template>

<script>
export default {
  name: 'NavigationLinks',
  props: {
    text1: {
      type: String,
      default: '후보자',
    },
    text3: {
      type: String,
      default: 'Semi;Colon이란?',
    },
    text2: {
      type: String,
      default: '공약',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.navigation-links-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.navigation-links-link {
  font-size: 16px;
  font-family: "SUIT-Regular";
  font-weight: 400;
  line-height: 1.15;
  margin-left: var(--dl-space-space-twounits);
  text-transform: none;
  text-decoration: none;
}
.navigation-links-link1 {
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.navigation-links-link2 {
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}














@media(max-width: 767px) {
  .navigation-links-nav {
    align-items: flex-start;
    flex-direction: column;
  }
  .navigation-links-link1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-links-link2 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
