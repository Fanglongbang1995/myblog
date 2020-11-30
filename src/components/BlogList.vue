<template>
  <div class="main-container">
    <section class="blog-list">
      <div class="container">
        <h2 class="heading">DevBlog - A Blog Template Made For Developers</h2>
        <div class="intro">
          Welcome to my blog. Subscribe and get my latest blog post in your
          inbox.
        </div>
        <el-form class="search-form">
          <div class="form-group">
            <el-input class="search" placeholder="Enter Keyward" />
          </div>
          <el-button class="search-btn">Subscribe</el-button>
        </el-form>
      </div>
    </section>
    <section class="list">
      <div class="item" v-for="i in 8" :key="i">
        <div class="media">
          <img
            class="media-photo"
            src="~@/assets/blog-post-thumb-1.jpg"
            alt="image"
          />
          <div class="media-body">
            <div class="title">Why Every Developer Should Have A Blog</div>
            <div class="meta mb-1">
              <span class="date">Published 2 days ago</span
              ><span class="time">5 min read</span
              ><span class="comment">8 comments</span>
            </div>
            <div class="intro">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quo
              voluptas libero, quae vitae excepturi officia consectetur
              reiciendis officiis quia corporis, tempora sunt provident, sed hic
              sapiente quasi. Nesciunt, amet?lor
            </div>
            <span class="more-link">Read more &rarr;</span>
          </div>
          <!--//media-body-->
        </div>
        <!--//media-->
      </div>
      <!--//item-->
    </section>
    <section class="pagenation">
      <el-button class="search-btn">上一页</el-button>
      <el-button class="search-btn">下一页</el-button>
    </section>
    <Foot />
  </div>
</template>
<script>
import Foot from "./Foot";
export default {
  name: "BlogList",
  components: {
    Foot
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.main-container {
  .blog-list {
    // padding: 2rem 0;
    padding-bottom: 2rem;
    background-color: #fafafa;
    .container {
      .heading {
        margin: 0;
        padding: 2rem 0;
        font-size: 2rem;
        font-weight: bolder;
      }
      .intro {
        font-size: 1rem;
        color: #4f4f4f;
      }
      .search-form {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
        .form-group {
          width: 360px;
          margin-right: 10px;
        }
        .search-btn {
          color: #fff;
          background-color: #42c257;
          border-color: #3dba52;
          font-weight: bolder;
        }
      }
    }
  }
  .list {
    padding: 3rem 8rem 0;
    .item {
      margin-bottom: 3rem;
      border-bottom: 1px solid #cfcfcf;
      .media {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
          max-width: 110px;
          border-radius: 2px;
          margin-right: 1rem;
        }
        .media-body {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          min-height: 8rem;
          text-align: left;
          .title {
            color: #292929;
            font-size: 1.275rem;
            font-weight: bold;
          }
          .meta {
            color: #8f8f8f;
            font-size: 0.8125rem;
          }
          .intro {
            font-size: 0.875rem;
            text-align: left;
          }
          .more-link {
            color: #5fcb71;
            font-size: 0.85rem;
            height: 2rem;
            line-height: 2rem;
            width: 100%;
            text-align: right;
          }
        }
      }
    }
  }
  .pagenation {
    padding-bottom: 30px;
    .el-button {
      width: 20%;
      background: #5fcb71;
      color: #fff;
      font-size: 1.1rem;
      padding: 1.2rem;
      font-weight: bold;
      position: relative;
      outline: none;
      border: none;
    }
    .el-button + .el-button {
      margin-left: 0;
    }
  }
}

@media screen and (min-width: 1700px) {
  .main-container {
    .list {
      padding: 3rem 24rem 0;
    }
  }
}

@media screen and (max-width: 768px) {
  .blog-list {
    padding: 10px;
    .search-form {
      flex-direction: column;
      .form-group {
        width: 100% !important;
        margin: 10px !important;
      }
      .el-button {
        width: 100%;
        margin: 10px;
      }
    }
  }
  .list {
    padding: 3rem 2rem 0 !important;
    .item {
      margin-bottom: 1rem !important;
      .media {
        //   flex-direction: column;
        img {
          display: none;
        }
        .media-body {
          .intro {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>
