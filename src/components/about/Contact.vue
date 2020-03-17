<template>
  <div class="component-margin container-fluid shadow p-5">
    <h1>Contact Us</h1>
    <p class="mt-4">
      Please submit the form or contact us through the provided contact
      information. We will reach out to you as soon as possible.
    </p>
    <p class="text-info">
      ***Info: As we are in the pre-initial stage any inconvenience caused is
      regretted.
    </p>

    <div class="py-1" id="contact">
      <div class="container">
        <div class="row pb-3">
          <div class="col-md-6 mt-5" data-aos="fade-up">
            <form method="POST">
              <div class="row form-group">
                <div class="col-md-6 mb-3 mb-md-0">
                  <label class="" for="fname">First Name</label>
                  <input type="text" id="fname" class="form-control bg-white" />
                </div>
                <div class="col-md-6">
                  <label class="" for="lname">Last Name</label>
                  <input type="text" id="lname" class="form-control bg-white" />
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-12">
                  <label class="" for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    class="form-control bg-white"
                  />
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-12">
                  <label class="" for="subject">Subject</label>
                  <input
                    type="subject"
                    id="subject"
                    class="form-control bg-white"
                  />
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <label class="" for="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="4"
                    class="form-control bg-white"
                  ></textarea>
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-12">
                  <input
                    type="button"
                    value="Get in Touch"
                    onclick="mypop()"
                    class="btn btn-info py-2 px-4 text-white"
                  />
                </div>
              </div>
            </form>
          </div>
          <div
            class="col-md-5 ml-auto mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="p-4 mb-3">
              <p
                class="mb-0 font-weight-bold text-secondary text-uppercase mb-3"
              >
                Address
              </p>
              <p class="mb-4">
                Bangalore-560067, Karnataka, India.
              </p>
              <p
                class="mb-0 font-weight-bold text-secondary text-uppercase mb-3"
              >
                Phone
              </p>
              <p class="mb-4"><a href="#">+91 </a></p>
              <p class="mb-4"><a href="#">+91 </a></p>
              <p
                class="mb-0 font-weight-bold text-secondary text-uppercase mb-3"
              >
                Email Address
              </p>
              <p class="mb-0">
                <a
                  href="chetan.nellikoppad@gmail.com?Subject=Enquiry%20WeUnite"
                  target="_top"
                  >chetan.nellikoppad@gmail.com</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function mypop() {
  alert(
    "Thank you for Submitting the details\n We will get back to you at the earliest."
  );
}
</script>

<style></style>
