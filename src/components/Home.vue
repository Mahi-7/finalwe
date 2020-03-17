<template>
  <div class="">
    <div class="component-margin component-fluid shadow p-0 w-751">
      <div class="row">
      <div class="col-lg-2 bg-light">
          <ul class="nav mr-auto h-100 shadow-sm fixed-top a-2x flex-column text-left" style="padding-top: 5rem; width: 13.5rem;">
            <div class=""  style="width: 14rem;">
            <router-link
                  to="/search"
                  tag="li"
                  class="mx-auto"
                  activeClass="active"
                  ><a class="nav-link text-secondary"
                    ><img src="src/assets/search.png" class="mr-2"/>Search</a
                ></router-link>
                <router-link
                  to="/search"
                  tag="li"
                  class="mx-auto"
                  activeClass="active"
                  ><a class="nav-link text-secondary"
                    ><img src="src/assets/share.png" class="mr-2"/>Share Joy</a
                ></router-link>
                <router-link
                  to="/search"
                  tag="li"
                  class="mx-auto"
                  activeClass="active"
                  ><a class="nav-link text-secondary"
                    ><img src="src/assets/meeting.png" class="mr-2"/>Meet Up</a
                ></router-link>
                <router-link
                  to="/search"
                  tag="li"
                  class="mx-auto"
                  activeClass="active"
                  ><a class="nav-link text-secondary"
                    ><img src="src/assets/help.png" class="mr-2"/>Seek Help</a
                ></router-link>
                <router-link
                  to="/search"
                  tag="li"
                  class="mx-auto"
                  activeClass="active"
                  ><a class="nav-link text-secondary"
                    ><img src="src/assets/postcard.png" class="mr-2"/>Post</a
                ></router-link>
                <router-link
                  to="/search"
                  tag="li"
                  class="mx-auto"
                  activeClass="active"
                  ><a class="nav-link text-secondary"
                    ><img src="src/assets/bell.png" class="mr-2"/>Notifications</a
                ></router-link>
                <router-link
                  to="/search"
                  tag="li"
                  class="mx-auto"
                  activeClass="active"
                  ><a class="nav-link text-secondary"
                    ><img src="src/assets/favorite.png" class="mr-2"/>Favorites</a
                ></router-link>
                <router-link
                  to="/search"
                  tag="li"
                  class="mx-auto"
                  activeClass="active"
                  ><a class="nav-link text-secondary"
                    ><img src="src/assets/suggestion.png" class="mr-2"/>Suggestions</a
                ></router-link>
            </div>
          </ul>
  </div>
        <div class="p-4 col-lg-6" style="padding-top: 75px !important;">
        <!-- The carousel -->
  <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="2500" data-pause="hover">

  <!-- Indicators -->
  <ul class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
    <li data-target="#myCarousel" data-slide-to="4"></li>
  </ul>
  
  <!-- The slideshow -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="src/assets/c-0.jpeg" alt="Los Angeles" width="600" height="200">
    </div>
    <div class="carousel-item">
      <img src="src/assets/c-1.jpeg" alt="Chicago" width="600" height="200">
    </div>
    <div class="carousel-item">
      <img src="src/assets/c-2.jpeg" alt="New York" width="600" height="200">
    </div>
    <div class="carousel-item">
      <img src="src/assets/c-3.jpeg" alt="New York" width="600" height="200">
    </div>
    <div class="carousel-item">
      <img src="src/assets/c-4.jpeg" alt="New York" width="600" height="200">
    </div>
  </div>
  
  <!-- Left and right controls -->
  <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#myCarousel" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>

            <router-view></router-view>
          </div>
          <div class="col-lg-2 bg-light">
          <div class="" style="padding-top: 5rem;">

            
          </div>
          </div>
          <div class="col-lg-2 p-1 bg-light border border-left">
          <div class="" style="padding-top: 3rem;">
              <div class="card m-0 border border-0 bg-light">
  <div class="card-body text-secondary p-0">
    <p class="mx-1 px-2 font-weight-bold">Recent Chats</p>
    <hr class="" style="width: 90%;">
    <ul class="nav a-2x">
      <li><img src="src/assets/avatar.png" class="avatar-img mr-3">Ralph</li>
      <li><img src="src/assets/avatar-1.png" class="avatar-img mr-3">Alexa</li>
      <li><img src="src/assets/avatar-2.png" class="avatar-img mr-3">Robert</li>
      <li><img src="src/assets/avatar-3.png" class="avatar-img mr-3">John Wick</li>
      <li class="mr-4"><img src="src/assets/avatar-4.png" class="avatar-img mr-3">Ninja</li>
      <li><img src="src/assets/avatar-5.png" class="avatar-img mr-3">Siri</li>
    </ul>
  </div>
  <hr class="w-100">
  <div class="card-body text-secondary p-0">
    <p class="mx-1 px-2 font-weight-bold">Group Chats</p>
    <hr class="" style="width: 90%;">
    <ul class="nav a-2x">
      <li><img src="src/assets/avatar.png" class="avatar-img mr-3">Gold Group</li>
      <li><img src="src/assets/avatar-1.png" class="avatar-img mr-3">Bronze Group</li>
      <li><img src="src/assets/avatar-2.png" class="avatar-img mr-3">Silver Group</li>
      <li><img src="src/assets/avatar-3.png" class="avatar-img mr-3">Late Group</li>
      <li><img src="src/assets/avatar-4.png" class="avatar-img mr-3">Shine Group</li>
      <li><img src="src/assets/avatar-5.png" class="avatar-img mr-3">Air Group</li>
    </ul>
  </div>
</div>
            
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
    .fix {
      position: fixed;
      left: 0rem !important;
      right: 0rem !important;
    }
    .card-header {
        display: flex;
        flex-direction: row;
        height: 60px;
        align-items: center;
    }
 .a-2x{
  font-size: 0.85rem;
}
</style>
