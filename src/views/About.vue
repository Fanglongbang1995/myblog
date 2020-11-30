<template>
  <div class="about">
    <article class="about-section">
      <div class="container">
        <h2 class="title">About Me</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus.
        </p>
        <figure>
          <img class="img-fluid" src="~@/assets/about-me.jpg" alt="image" />
        </figure>
        <h5 class="subtitle">About The Blog</h5>
        <p>
          Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
          tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
          amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
          luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
          tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
          Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
          Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
          magna. Sed consequat, leo eget bibendum sodales, augue velit cursus
          nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
          Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
        </p>
        <h5 class="subtitle">My Skills and Experiences</h5>
        <p>
          Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi.
        </p>
        <h5 class="subtitle">Side Projects</h5>
        <p>
          Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi.
        </p>
        <!-- <figure>
          <a href="#"
            ><img
              class="img-fluid"
              src="assets/images/promo-banner.jpg"
              alt="image"
          /></a>
        </figure> -->
      </div>
    </article>
    <!--//about-section-->
  </div>
</template>
<style lang="less" scoped>
.about {
  text-align: left;
  padding: 0 8rem;
  .container {
    .title {
      font-size: 2rem;
      font-weight: bold;
    }
    p {
      font-size: 1.125rem;
      line-height: 1.6;
      margin-top: 0;
      margin-bottom: 1rem;
      color: #4f4f4f;
    }
    img {
      max-width: 100%;
      height: auto;
    }
    .subtitle {
      font-size: 1.25rem;
    }
  }
}

@media screen and (min-width: 1700px) {
  .about {
    padding: 3rem 24rem 0;
  }
}

@media screen and (max-width: 768px) {
  .about {
    padding: 1rem 2rem 0;
  }
}
</style>
