<template>
  <div class="car-card">
    <!-- 图片可配：keyId-image -->
    <img
      :src="image"
      :alt="title"
      class="card-image"
      :id="keyId ? `${keyId}-image` : null"
      :data-c-src="keyId ? '@id' : null"
    />

    <!-- 标题可配：keyId-title -->
    <h2
      class="text-xl font-semibold mt-2"
      :id="keyId ? `${keyId}-title` : null"
      :data-c="keyId ? '@id' : null"
    >
      {{ title }}
    </h2>

    <!-- 副标题可配：keyId-subtitle -->
    <p
      class="subtitle"
      v-if="subtitle"
      :id="keyId ? `${keyId}-subtitle` : null"
      :data-c="keyId ? '@id' : null"
    >
      {{ subtitle }}
    </p>

    <!-- Tour 可配：keyId-tour -->
    <p>
      <strong>Tour:</strong>
      <span :id="keyId ? `${keyId}-tour` : null" :data-c="keyId ? '@id' : null">
        {{ tour }}
      </span>
    </p>

    <!-- Duration 可配：keyId-duration -->
    <p>
      <strong>Duration:</strong>
      <span :id="keyId ? `${keyId}-duration` : null" :data-c="keyId ? '@id' : null">
        {{ duration }}
      </span>
    </p>

    <!-- Price 可配（数字/金额）：keyId-price -->
    <p class="price">
      <strong>Price:</strong>
      <span
        :id="keyId ? `${keyId}-price` : null"
        :data-c-num="keyId ? '@id' : null"
        data-format="price-AED"
      >
        {{ price }}
      </span>
    </p>

    <!-- 按钮文案可配：keyId-ctaLabel（链接本身保持路由） -->
    <router-link :to="link">
      <button
        class="learn-more-button"
        :id="keyId ? `${keyId}-ctaLabel` : null"
        :data-c="keyId ? '@id' : null"
      >
        Learn More
      </button>
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
    price: [String, Number],
    link: String,
    subtitle: {
      type: String,
      default: 'Car-With-Driver'
    },
    /**
     * 关键：给每张卡传一个 key-id（如 "transfersCardAirport"）
     * 组件会基于它生成：
     * - xxx-image / xxx-title / xxx-subtitle / xxx-tour / xxx-duration / xxx-price / xxx-ctaLabel
     * 后台按这些 id 写值即可覆盖。
     */
    keyId: {
      type: String,
      default: ''
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
