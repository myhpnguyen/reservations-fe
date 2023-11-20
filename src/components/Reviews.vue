<template>
  <div class="container my-4">
    <h2>Submit Your Review</h2>
    <form @submit.prevent="submitReview">
      <div class="mb-3">
        <label for="menuItem" class="form-label">Menu Item</label>
        <input type="text" class="form-control" id="menuItem" v-model="menuItem" required>
      </div>
      <div class="mb-3">
        <label for="rating" class="form-label">Rating (0.0 - 5.0)</label>
        <input type="number" class="form-control" id="rating" v-model.number="rating" step="0.1" min="0" max="5" required>
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" v-model="name" required>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea class="form-control" id="description" v-model="description"></textarea>
      </div>
      <div class="mb-3">
        <label for="mealPrice" class="form-label">Meal Price</label>
        <input type="number" class="form-control" id="mealPrice" v-model.number="mealPrice" required>
      </div>
      <div class="mb-3">
        <label for="visitedDate" class="form-label">Visited Date</label>
        <input type="date" class="form-control" id="visitedDate" v-model="visitedDate" required>
      </div>
      <!-- <div class="mb-3">
        <label for="imageUpload" class="form-label">Upload Image</label>
        <input type="file" class="form-control" id="imageUpload" @change="onFileChange">
      </div> -->
      <button type="submit" class="btn btn-primary">Submit Review</button>
    </form>
    <!-- Preview section -->
    <!-- <div v-if="imageUrl">
      <h3>Image Preview:</h3>
      <img :src="imageUrl" class="img-fluid" alt="Preview" />
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Reviews',
  data() {
    return {
      menuItem: '',
      rating: null,
      name: '',
      description: '',
      mealPrice: null,
      visitedDate: '',
      imageFile: null,
      // imageUrl: null
    };
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      this.imageFile = file;
      this.imageUrl = URL.createObjectURL(file);
    },
    async submitReview() {
      try {
      // Prepare form data
      const formData = new FormData();
      formData.append('menu_item', this.menuItem);
      formData.append('rating', this.rating);
      formData.append('name', this.name);
      formData.append('description', this.description);
      formData.append('meal_price', this.mealPrice);
      formData.append('visited_date', this.visitedDate);
      const response = await axios.post('/api/reviews', formData);
      alert('Review submitted successfully!');
        // ... reset form ...
      } catch (error) {
      console.error('Error submitting review:', error);
      alert('Error submitting review.');
      if (this.imageFile) {
        formData.append('image', this.imageFile);
      }
      
      // Submit to your server (example endpoint: '/api/reviews')
      try {
        await this.$http.post('/api/reviews/', formData);
        alert('Review submitted successfully!');
        // Reset form
        this.menuItem = '';
        this.rating = null;
        this.name = '';
        this.description = '';
        this.mealPrice = null;
        this.visitedDate = '';
        this.imageFile = null;
        // this.imageUrl = null;
      } catch (error) {
        console.error('Error submitting review:', error);
        alert('Error submitting review.');
      }
    }
  }
}

};
</script>