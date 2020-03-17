<template>
  <div>
    <footer class="pt-5 pb-0 footer-back">
      <div class="container-fluid">
        <div class="row mb-5">
        <div class="col-lg-1 mt-3 p-0 mx-0"></div>
          <div class="col-lg-4 mt-3">
            <h6 class="text-uppercase text-light mb-4">About Us</h6>
            <p class="text-justify text-secondary">
              We as a startup want <strong>TO UNITE EVERYONE</strong> by providing the users with the best platform where they can interact, make friends, socialize, help eachother.
            </p>
          </div>
          <div class="col-lg-2 ml-auto mt-3">
            <h6 class="text-light text-uppercase mb-4">Quick Links</h6>
            <ul class="list-unstyled">
              <router-link to="/about" tag="li" activeClass="active"
                ><a class="text-secondary">About Us</a></router-link
              >
              <router-link to="/blog" tag="li" activeClass="active"
                ><a class="text-secondary">Blog</a></router-link
              >
              <router-link to="/partners" tag="li" activeClass="active"
                ><a class="text-secondary">Partners</a></router-link
              >
              <router-link to="/sponsors" tag="li" activeClass="active"
                ><a class="text-secondary">Sponsors</a></router-link
              >
              <router-link to="/donate" tag="li" activeClass="active"
                ><a class="text-secondary">Donate</a></router-link
              >
            </ul>
          </div>
          <div class="col-lg-2 mt-3">
            <h6 class="text-uppercase text-light mb-4">Get the App</h6>
            <ul class="list-unstyled">
              <router-link to="/android" tag="li" activeClass="active"
                ><a class="text-secondary"><i class="fab fa-google-play mr-2"></i>Android App</a></router-link
              >
              <router-link to="/ios" tag="li" activeClass="active"
                ><a class="text-secondary"><i class="fab fa-app-store-ios mr-2"></i>IOS App</a></router-link
              >
              </ul>
          </div>
          <div class="col-lg-2 mt-3">
            <h6 class="text-uppercase text-light mb-4">Connect with Us</h6>
            <p class="">
              <a
                href="https://www.facebook.com"
                class="p-2 text-secondary"
                target="_blank"
                ><i class="fab fa-facebook"></i</span
              ></a>
              <a
                href="https://www.twitter.com"
                class="p-2 text-secondary"
                target="_blank"
                ><i class="fab fa-twitter"></i></span
              ></a>
              <a
                href="https://www.instagram.com"
                class="p-2 text-secondary"
                target="_blank"
                ><i class="fab fa-instagram"></i></span
              ></a>
              <a
                href="https://www.github.com"
                class="p-2 text-secondary"
                target="_blank"
                ><i class="fab fa-github"></i></span
              ></a>
            </p>
          </div>
          <div class="col-lg-1 mt-3 p-0 mx-0"></div>
        </div>
        <div class="row">
          <div class="col-md-12 text-right text-muted ">
            <div class="border-top border-dark pt-3 mb-2">
              <p style="font-size: 0.85rem">
                2020 Copyright &copy; All rights reserved | This template is made by
                <a href="#" class="text-light"> CHETHAN </a>&
                <a href="" target="_blank" class="text-light"
                  >MAHI.</a
                >
                <a href="https://www.github.com" class="text-secondary ml-3" target="_blank"
                    ><i class="fab fa-github"></i></a
                  >
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.footer-back {
  background-color: #051322;
}
</style>
