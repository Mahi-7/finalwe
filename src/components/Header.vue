<template>
  <div>
    <header class="site-navbar bg-white shadow-sm fixed-top" role="banner">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-10 col-xl-2 my-auto mx-0 px-0">
            <router-link to="/" class="mt-1" activeClass="active"
              ><a><img src="src/assets/logo.png" class="img-size"/></a
            ></router-link>
          </div>
          <div class="col-12 col-md-10 d-none d-xl-block ml-0">
            <nav class="site-navigation position-relative" role="navigation">
              <ul
                class="site-menu js-clone-nav mx-auto d-none d-lg-block m-0 p-0"
              >
                <router-link
                  to="/profile"
                  tag="li"
                  class="mx-1"
                  activeClass="active"
                  data-toggle="tooltip" data-placement="bottom" title="Profile"
                  ><a class="nav-link text-dark"
                    ><i
                      class="fas fa-user-circle fa-2x display-block text-center"
                    ></i></a
                ></router-link>
                <router-link
                  to="/"
                  tag="li"
                  class="mx-1"
                  exact
                  activeClass="active"
                  data-toggle="tooltip" data-placement="bottom" title="Home"
                  ><a class="nav-link text-dark"
                    ><i
                      class="fas fa-home fa-2x display-block text-center"
                    ></i></a
                ></router-link>
                <router-link
                  to="/explore"
                  tag="li"
                  class="mx-1"
                  activeClass="active"
                  data-toggle="tooltip" data-placement="bottom" title="Explore"
                  ><a class="nav-link text-dark"
                    ><i
                      class="fas fa-search fa-2x display-block text-center"
                    ></i></a
                ></router-link>
                <router-link
                  to="/blog"
                  tag="li"
                  class="mx-1"
                  activeClass="active"
                  data-toggle="tooltip" data-placement="bottom" title="Blog"
                  ><a class="nav-link text-dark"
                    ><i
                      class="fas fa-blog fa-2x display-block text-center"
                    ></i></a
                ></router-link>
                <router-link
                  to="/chat"
                  tag="li"
                  class="mx-1"
                  activeClass="active"
                  data-toggle="tooltip" data-placement="bottom" title="Chat"
                  ><a class="nav-link text-dark"
                    ><i
                      class="fas fa-comment-alt fa-2x display-block text-center"
                    ></i></a
                ></router-link>
                <router-link
                  to="/sponsors"
                  tag="li"
                  class="mx-1"
                  activeClass="active"
                  data-toggle="tooltip" data-placement="bottom" title="Sponsors"
                  ><a class="nav-link text-dark"
                    ><i class="fas fa-users fa-2x display-block text-center"></i></a
                ></router-link>
                <router-link
                  to="/partners"
                  tag="li"
                  class="mx-1"
                  activeClass="active"
                  data-toggle="tooltip" data-placement="bottom" title="Partners"
                  ><a class="nav-link text-dark"
                    ><i class="fas fa-handshake fa-2x display-block text-center"></i></a
                ></router-link>
                <router-link
                  to="/donate"
                  tag="li"
                  class="mx-1"
                  activeClass="active"
                  data-toggle="tooltip" data-placement="bottom" title="Donate"
                  ><a class="nav-link text-dark"
                    ><i class="fas fa-hand-holding-usd fa-2x display-block text-center"></i></a
                ></router-link>

              </ul>
            </nav>
          </div>
          <div
            class="col-2 d-inline-block d-xl-none ml-md-0 mt-3 text-right mr-0 ml-auto"
            style="position: relative; bottom: 5px;"
          >
            <a href="#" class="site-menu-toggle js-menu-toggle text-dark "
              ><span class="icon-menu h3"></span
            ></a>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>

</script>


<style>
.img-size {
  width: 1.5rem;
}
.fa-2x{
  font-size: 1.2rem !important;
}
li {
  padding: 0.25rem 0.75rem !important;
}
</style>
