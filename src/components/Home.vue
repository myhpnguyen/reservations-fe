<template>
  <div class="cover">
  <div class="container-fluid">
    <div class="row1">
      <!-- Welcome {{ validUserName }}! -->
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

    <section class="special-section">
      <div class="container">
        <h2>Join Our Culinary Journey</h2>
        <p>At Smokey's Barbeque, every dish is a celebration of flavors and tradition. Dive into our special weekend
          buffets or join us for the daily happy hour specials. Looking for more? Sign up for our exclusive cooking
          workshops with Chef John Doe, where he unveils the secrets behind our signature barbeque sauce and grilling
          techniques.</p>

        <div class="special-offers">
          <h3>Special Offers:</h3>
          <ul>
            <li><strong>Family Sundays:</strong> Kids eat free! Treat your family to a sumptuous meal where fun and taste
              intertwine.</li>
            <li><strong>Midweek Madness:</strong> Every Wednesday, enjoy 20% off on all vegetarian dishes. It's a midweek
              retreat for your taste buds!</li>
            <li><strong>Loyalty Program:</strong> Join our Smokey's Loyalty Club and earn points for every dollar you
              spend. Redeem them for discounts, free meals, and special gifts.</li>
          </ul>
        </div>

        <div class="upcoming-events">
          <h3>Upcoming Events:</h3>
          <ul>
            <li><strong>Live Music Nights:</strong> Every Friday and Saturday night, let the rhythm of blues and jazz
              elevate your dining experience.</li>
            <li><strong>Barbeque Masterclass:</strong> Register for our monthly BBQ masterclass and become a grill master
              in your own backyard.</li>
          </ul>
      </div>
      </div>
    </section>

  </div>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-about">
        <h3>About Smokey's Barbeque</h3>
        <p>Delicious BBQ since 2023. <br>
          Visit us for an authentic taste of the grill!</p>
      </div>
      <div class="footer-navigation">
        <h3>Navigation</h3>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reviews">Reviews</a></li>
          <li><a href="/reserve">Reserve</a></li>
        </ul>
      </div>
      <div class="footer-contact">
        <h3>Contact Us</h3>
        <p>123 BBQ Town Omaha, NE</p>
        <p>(123) 456-7890</p>
        <p><a href="mailto:info@smokeysbbq.com">info@smokeysbbq.com</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
import router from '../router'
export default {
  name: 'Home',
  beforeCreate() {
    if (localStorage.getItem("isAuthenticated") &&
      JSON.parse(localStorage.getItem("isAuthenticated")) === true) {
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
      router.push({ name: 'Reviews' });
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

<style lang="scss">
section {
  text-align: left;
  padding: 20px 0px;
  
}

.special-section {
    background-color: #f2f2f2;
}

.cover {
  background-image: url('https://images.wcdn.co.il/f_auto,q_auto,w_1200,t_54/3/5/6/5/3565749-46.jpg'); 
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
.row1 {
  text-align: justify;
  margin-block-end: 1em;
  display: block;
  margin-block-start: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px;
}

.site-footer {
  bottom: 0;
  width: 100%;
  background-color: #442027;
  color: #FFF4C3;
  text-align: left;
  padding: 25px;
}

.site-footer .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.site-footer h3 {
  margin-bottom: 15px;
}

.site-footer p,
.site-footer a {
  color: white;
}

.site-footer a {
  text-decoration: none;
}

.site-footer .footer-navigation ul {
  list-style: none;
  padding: 0;
}

.site-footer .footer-navigation ul li {
  margin-bottom: 10px;
}

.card-group {
  margin-bottom: 60px;
  /* Adjust the value as needed */
}

/* Responsive design for the footer */
@media (max-width: 768px) {
  .site-footer .container {
    padding-top: 50px;
    flex-direction: column;
  }

  .site-footer .container>div {
    margin-bottom: 20px;
    margin-right: 15px;
    margin-left: 15px;
  }

  .site-footer h3,
  .site-footer p,
  .site-footer a {
    text-align: center;
  }
}</style>