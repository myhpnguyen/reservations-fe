<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col col-12 align-items-center justify-content-center">
                <blockquote>
                    &#8220;Welcome {{validUserName}}!&#8221;
                    <footer>
                    <small>
                        <em>&mdash;Welcome to our Smokehouse!</em>
                    </small>
                    </footer>
                </blockquote>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row align-items-center justify-content-center">
            <div class="col col-12 col-sm-10 col-md-10">
                <div class="card-group">
                <div class="card">
                  <img :src="require('@/assets/menu.png')" class="card-img-top" style="height: 15rem">
                  <div class="card-body">
                    <h5 class="card-title">Menu</h5>
                    <a @click="Menu" class="btn btn-primary">Show Menu</a>
                  </div>
                </div>
                <div class="card">
                  <img :src="require('@/assets/pulled_pork.jpeg')" class="card-img-top" style="height: 15rem">
                  <div class="card-body">
                    <h5 class="card-title">Leave A Review</h5>
                    <a @click="Reviews" class="btn btn-primary">Leave A Review</a>
                  </div>
                </div>
                <div class="card">
                  <img :src="require('@/assets/book_reservation.png')" class="card-img-top" style="height: 15rem">
                  <div class="card-body">
                    <h5 class="card-title">Reserve</h5>
                    <a @click="Reserve" class="btn btn-primary">Make Reservation</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from '../router'
export default {
    name: 'Home',
    beforeCreate() {
    if (localStorage.getItem("isAuthenticated") &&
        JSON.parse(localStorage.getItem("isAuthenticated")) === true ){
          this.authenticated = true
        }
        else {
          this.authenticated = false
        }
   },
    data: () => ({
      validUserName: "Guest",
      authenticated: false
    }),
    mounted() {
      this.getUser();
    },
    methods: {
    Menu() {
      router.push({ name: 'Menu' });
    },
    Reviews() {
      if (this.authenticated) {
        router.push({ name: 'Reviews' }); // Assuming 'Reviews' is the name of your review page route
      } else {
        router.push({ name: 'Register' }); // Redirect to Register page
      }
    },
    Reserve() {
      // Placeholder - replace '/reserve' with the actual path when available
      router.push('/reserve');
    },
        getUser() {
          if (localStorage.getItem("isAuthenticated") &&
              JSON.parse(localStorage.getItem("isAuthenticated")) === true) {
              this.validUserName = JSON.parse(localStorage.getItem("log_user"));
              this.authenticated = true;
            }
        }
    }
};
</script>
