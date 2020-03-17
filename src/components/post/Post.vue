<template>
  <div class="">
    <div class="component-margin component-fluid shadow p-4 w-751">
      <div class="row">
        <div class="p-4 col-lg-7">
          <router-view></router-view>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-4">
          <div class="">
            <div class="text-center my-4">
              <i class="fas fa-user-circle fa-2x mr-1"></i>
              <span class="ml-2 h6 font-weight-bold text-secondary mt-2"
                >Username</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
