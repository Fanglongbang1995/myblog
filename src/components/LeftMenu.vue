<template>
  <div class="left-menu">
    <el-button class="nav-button el-icon-menu" @click="showMenu"></el-button>
    <div class="name">
      <div>{{ name }} 's Blog</div>
    </div>
    <div class="main-container" :class="toggle ? 'show' : 'hidden'">
      <img src="../assets/logo.png" alt="头像" class="photo" />
      <div class="summary">
        {{ summary }}
        <br />
        <a href="http://">Find out more about me</a>
      </div>
      <div class="social-list">
        <ul>
          <li><i class="el-icon-user-outline"></i></li>
          <li><i class="el-icon-phone-outline"></i></li>
          <li><i class="el-icon-more-outline"></i></li>
          <li><i class="el-icon-more-outline"></i></li>
          <li><i class="el-icon-more-outline"></i></li>
        </ul>
      </div>
      <div class="line">
        <div class="hr"></div>
      </div>
      <div class="nav-bar">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Blog Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About Me</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/post" class="nav-link">Blog Post</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LeftMenu",
  props: {
    name: String,
    summary: String
  },
  data() {
    return {
      toggle: false
    };
  },
  methods: {
    showMenu() {
      this.toggle = !this.toggle;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.left-menu {
  height: 100%;
  width: 100%;
  background-color: #5fcb71;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.3s;
  .nav-button {
    display: none;
  }
  .name {
    font-weight: bold;
    font-size: 1.5rem;
    padding: 1rem 0;
  }

  .main-container {
    // display: block;
    transition: all 0.3s;
    .summary {
      font-size: 0.875rem;
      padding: 0 2vw;
    }
    .photo {
      max-width: 160px;
      border-radius: 50%;
    }
    .social-list {
      margin: 2rem 0;
      ul {
        display: flex;
        justify-content: center;
        li {
          margin: 0 7px;
          i {
            width: 30px;
            height: 30px;
            padding-top: 5px;
            display: inline-block;
            text-align: center;
            border-radius: 50%;
            transition: all 0.4s ease-in-out;
            background-color: #fff;
          }
        }
      }
    }
    .line {
      padding: 0 20px;
      .hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
    }

    .nav-bar {
      font-weight: bold;
      .nav-item {
        height: 40px;
        .nav-link:hover {
          text-decoration: underline;
          color: rgba(0, 0, 0, 0.6);
        }
        .router-link-exact-active {
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .left-menu {
    .nav-button {
      display: block;
      border-radius: 2px;
      border: 1px solid rgba(255, 255, 255, 0.8);
      background-color: transparent;
      color: #fff;
      position: fixed;
      left: 10px;
      top: 10px;
    }
    .show {
      height: 490px;
    }
    .hidden {
      // display: none;
      height: 0px;
      overflow: hidden;
    }
    .main-container {
      // display: none;
      transition: all 0.3s;
    }
  }
}
</style>
