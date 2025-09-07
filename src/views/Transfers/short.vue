<template>
  <div class="details-page">
    <!-- Banner Section -->
    <div class="banner-container">
      <img src="@/assets/images/banner7.jpg" alt="Transfers Banner" class="banner" />

      <!-- 悬浮 Logo -->
      <div class="floating-logos">
        <img src="@/assets/images/logo-www-gold.png" alt="Gold Logo" class="logo" />
        <img src="@/assets/images/logo-text.png" alt="Text Logo" class="logo-text" />
      </div>
    </div>
    <h1>Airport Transfers %20|%20 Half-Day With Driver</h1>

    <section>
      <h2>Airport Transfers</h2>
      <ul>
        <li><strong>DXB – Dubai Hotel</strong></li>
        <li>SUV (4–6 pax): from 190 AED</li>
        <li>Van (7–10 pax): from 230 AED</li>
        <li><strong>AUH – Dubai Hotel</strong></li>
        <li>SUV: ~330 AED | Van: ~380 AED</li>
        <li>60-min free wait; peak hour surcharge applies</li>
      </ul>
    </section>

    <section>
      <h2>Half-Day Car with Driver</h2>
      <ul>
        <li>Service Duration: 5 Hours</li>
        <li>SUV: from 300 AED | Van: from 330 AED</li>
        <li>Includes 100km; extra: 80–150 AED/hr</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.details-page {
  text-align: center;
  font-family: 'Poppins', sans-serif;
}
/* Banner 容器统一设置 */
.banner-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* LOGO 悬浮效果，左上角 */
.floating-logos {
  position: absolute;
  top: 10px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* 缩小 LOGO 尺寸 */
.logo {
  height: 120px;
}

.logo-text {
  height: 130px;
  margin-top: -70px;
}


h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

h2 {
  margin-top: 30px;
  color: #333;
}
</style>
