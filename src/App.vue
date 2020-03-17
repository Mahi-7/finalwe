<template>
  <div class="container-fluid px-0">
  <div class="site-wrap">
    <div class="site-mobile-menu">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>
    <appHeader></appHeader>
  </div>
    <router-view></router-view>
    <div><appFooter></appFooter></div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
};
</script>

<style>
body {
  line-height: 1.5;
  font-weight: 400;
  font-size: 1rem;
}
.card-header {
  display: flex;
  flex-direction: row;
  height: 60px;
  align-items: center;
}
.avatar-img {
  width: 2rem;
  height: 2rem;
  border-radius: 50px;
}
</style>
