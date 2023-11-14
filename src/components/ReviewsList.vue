<template>
    <div class="reviews-container">
      <div v-for="review in ReviewsList" :key="review.id" class="review-item">
        <h3>{{ review.name }}</h3>
        <p>{{ review.description }}</p>
        <!-- Add other review fields here as needed -->
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ReviewsList',
    data() {
      return {
        ReviewsList: [
        ]
      };
    },
    created() {
      this.fetchReviews();
    },
    methods: {
      async fetchReviews() {
        try {
          const response = await axios.get('/api/reviews'); // Adjust URL to your API endpoint
          this.reviews = response.data;
        } catch (error) {
          console.error('Error fetching reviews:', error);
        }
      }
    }
  };
  </script>
  
  <style>
  /* Add styles for your reviews here */
  </style>
  