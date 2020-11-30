<template>
  <div class="layout">
    <header>
      <LeftMenu name="tony" :summary="summary" />
    </header>
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>
<script>
import LeftMenu from "@/components/LeftMenu.vue";
export default {
  name: "LayOut",
  data() {
    return {
      summary:
        "Hi, my name is Anthony Doe. Briefly introduce yourself here. You can also provide a link to the about page."
    };
  },
  components: {
    LeftMenu
  }
};
</script>
<style lang="less" scoped>
.layout {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  header {
    width: 280px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
  }
  .main-container {
    flex-grow: 1;
    min-height: 100vh;
    background-color: #fff;
    margin-left: 280px;
    text-align: center;
  }
}

@media screen and (max-width: 992px) {
  .layout {
    flex-direction: column;
    header {
      position: initial;
      width: 100%;
      height: auto;
      transition: all 0.3s;
    }
    .main-container {
      position: static;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }
  }
}
</style>
