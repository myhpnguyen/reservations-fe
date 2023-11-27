<template>
  <div class="reviews-section">
    <h2 class="reviews-title">Customer Reviews</h2>

    <div class="review-buttons">
      <a @click="Reviews" class="btn btn-primary">Leave A Review</a>
      <!-- <router-link to="{name: 'reviews'}" class="btn btn-primary leave-review-btn" role="button">Leave A Review</router-link> -->
    </div>

    <div class="reviews-container">
      <div v-for="review in reviewsList" :key="review.id" class="review-card">
        <div class="review-rating">
          <span class="stars" v-if="review.rating">{{ convertRatingToStars(review.rating) }}</span>
          <span>{{ review.rating }}</span>
        </div>
        <div class="review-content">
          <p>{{ review.description }}</p>
        </div>
        <div class="review-meta">
          <!-- <span>{{ formatDate(review.visited_date) }}</span> -->
          <button class="like-review-btn">👍</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { APIService } from '@/http/APIService.js';
const apiService = new APIService();


export default {
  name: 'ReviewsList',
  data() {
    return {
      reviewsList: [],
    };
  },

  mounted() {
    this.getReviews(); 
  },
  methods: {
    ReviewsList() {
      // if (this.authenticated) {
      //   router.push({ name: 'ReviewsList' }); 
      // } else {
      //   router.push({ name: 'Register' }); 
      // }
      router.push({ name: 'Reviews' });
    },
    getReviews() {
      const jwtToken = localStorage.getItem('access');
      if (!jwtToken) {
        console.error('JWT token is not available. User might not be logged in.');
        this.$router.push('/auth');
        return;
      }

      apiService.getReviews()
        .then(response => {
          console.log(response.data);
          this.reviewsList = response.data;
        })
        .catch(error => {
          console.error('Error fetching reviews:', error);
          if (error.response && error.response.status === 401) {
            console.error('Authentication error. Redirecting to login.');
            this.$router.push('/auth');
          }
        });
    },

    convertRatingToStars(rating) {
  const numericRating = parseFloat(rating) || 0;
  const roundedRating = Math.round(numericRating);
  return '★'.repeat(roundedRating) + '☆'.repeat(5 - roundedRating);
}

  },
}
</script>


<style>
.reviews-section {
  padding-top: 10px;
}

.reviews-title {
  padding-top: 10px;
  color: #442027;
}

.leave-review-btn {
  padding: 10px 15px;
  margin-bottom: 20px;
  background-color: transparent; /* Set the background to transparent */
  color: #000; /* Set the text color as needed */
  border: 2px solid #000; /* Optional: if you want a border */
  border-radius: 4px;
  text-align: center;
  text-decoration: none; /* Removes underline from links */
  display: inline-block; /* Allows applying padding and makes element behave like a button */
  cursor: pointer; /* Changes the mouse cursor to indicate it's clickable */
}

.leave-review-btn:hover {
  background-color: #e0e0e0; /* Light grey background for hover effect */
  text-decoration: none; /* Ensures text is not underlined on hover */
}

.reviews-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: #FFF4C3;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.review-card {
  border-bottom: 1px solid #e1e1e1;
  /* Light grey border for separation */
  padding: 20px;
  margin-top: 20px;
}

.review-rating .stars {
  /* Styles for the stars (consider using a font for better scalability) */
  color: #ffcc00;
  margin-right: 10px;
  /* Gold color for stars */
}

.review-content {
  margin-bottom: 10px;
}

.review-meta {
  display: flex;
  justify-content: space-between;
  /* Separates the date and icons */
  align-items: center;
}

.like-review-btn,
.reply-review-btn {
  color: #333;
  /* Dark text for better visibility */
  font-size: 1.2em;
  /* Larger icons */
}

@media (max-width: 768px) {
  .reviews-container {
    padding-top: 20px;
  }

  .review-card {
    padding: 10px;
  }
}</style>

