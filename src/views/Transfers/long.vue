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
    <h1>Full Day | Dubai to Abu Dhabi</h1>

    <section>
      <h2>Full-Day Car with Driver</h2>
      <ul>
        <li>Service Duration: 10 Hours</li>
        <li>SUV: from 510 AED | Van: from 550 AED</li>
        <li>Outside Dubai: +100–200 AED</li>
        <li>Overtime: 100–200 AED/hr</li>
      </ul>
    </section>

    <section>
      <h2>Dubai to Abu Dhabi with Sightseeing</h2>
      <ul>
        <li>10-hour sightseeing transfer</li>
        <li>SUV: from 610 AED | Van: from 650 AED</li>
        <li>Prices exclude entry tickets or meals</li>
        <li>Fixed per group; not per person</li>
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
