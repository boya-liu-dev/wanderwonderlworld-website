<template>
  <div class="car-card">
    <img :src="image" :alt="title" class="card-image" />
    <h2 class="text-xl font-semibold mt-2">{{ title }}</h2>
    <p class="subtitle" v-if="subtitle">{{ subtitle }}</p>
    <p><strong>Tour:</strong> {{ tour }}</p>
    <p><strong>Duration:</strong> {{ duration }}</p>
    <p class="price"><strong>Price:</strong> <span>{{ price }}</span></p>
    <router-link :to="link">
      <button class="learn-more-button">Learn More</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CarCard',
  props: {
    image: String,
    title: String,
    tour: String,
    duration: String,
    price: String,
    link: String,
    subtitle: {
      type: String,
      default: 'Car-With-Driver'
    }
  }
}
</script>

<style scoped>
.car-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  max-width: 300px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.card-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
}

.subtitle {
  font-size: 0.9rem;
  color: #666;
  margin: 6px 0;
}

.price span {
  color: #d32f2f;
  font-weight: bold;
}

.learn-more-button {
  background-color: #c3aa0c;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.learn-more-button:hover {
  background-color: #a68d05;
}
</style>
