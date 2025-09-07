<template>
  <div class="transfers">
    <!-- Banner -->
    <div class="banner-container">
      <img :src="banner" alt="Transfers Banner" class="banner" />
      <div class="floating-logos">
        <img :src="logoGold" alt="Gold Logo" class="logo" />
        <img :src="logoText" alt="Text Logo" class="logo-text" />
      </div>
    </div>

    <!-- Intro -->
    <div class="intro">
      <h1>Private Transfers in Dubai</h1>
      <p>Experience Dubai’s allure in comfort and convenience with our top-rated private transfers and car with driver services. At WanderWonderWorld, we offer a fleet of immaculate and well-maintained chauffeur cars with experienced drivers who know the roads of the UAE. We cater to all your needs, from stress-free airport transfers to personalized city tours and business trips. Let us provide a seamless and professional journey that perfectly matches your travel dreams.</p>
    </div>
    <div class="whatsapp-wrapper">
  <a
    href="https://wa.me/971589831967?text=Hello%20WanderWonderWorld%20Dubai!%20I%20am%20interested%20in%20your%20services."
    class="whatsapp-button hover-reveal">
    <img src="@/assets/images/whatsapp-icon.png" alt="WhatsApp" />
    <span class="whatsapp-text">Need help? Chat with us!</span>
  </a>
 </div>

    <!-- Cards with images (4 types of transfer) -->
    <div class="cards-container">
      <CarCard
  :image="car1"
  title="Airport Transfers"
  tour="Dubai City"
  duration="Varies"
  price="from AED 190"
  link="/transfers/short"
/>

<CarCard
  :image="car2"
  title="Half-Day with Driver"
  tour="Dubai City"
  duration="5 Hours"
  price="from AED 300"
  link="/transfers/short"
/>

<CarCard
  :image="car3"
  title="Full-Day with Driver"
  tour="Dubai City"
  duration="10 Hours"
  price="from AED 510"
  link="/transfers/long"
/>

<CarCard
  :image="car4"
  title="Dubai to Abu Dhabi"
  tour="Abu Dhabi"
  duration="10 Hours"
  price="from AED 610"
  link="/transfers/long"
/>


    </div>

    <!-- Full-width textual cards (no image, no buttons) -->
    <div class="text-card">
      <h2>Seamless Journeys: Our Dubai Chauffeur Services</h2>
      <p>At WanderWonderWorld, we provide professional and reliable chauffeur services designed for your comfort and peace of mind. Our fleet consists of well-maintained, clean vehicles, operated by licensed and experienced drivers. We cater to all private transport needs, from efficient airport transfers to tailored day tours, ensuring a secure and hassle-free travel experience. We are committed to punctuality, vehicle safety, and superior customer service.</p>
    </div>

    <div class="text-card">
      <h2>Tailored Transport: Your Private Car & Driver Options</h2>
      <p><strong>Airport Transfers:</strong> We offer punctual, meet-and-greet services from both Dubai (DXB) and Abu Dhabi (AUH) airports to any destination in both cities. Our drivers track your flight status to ensure timely pickups, even in case of delays.</p>
      <p><strong>Half-Day & Full-Day Hire:</strong> Explore Dubai at your own pace with our hourly or daily chauffeur service. We provide comfortable vehicles for sightseeing, business meetings, or family trips, allowing you to design your itinerary freely.</p>
      <p><strong>Safety and Comfort:</strong> All vehicles are equipped with adequate space for luggage. Child seats are available upon advance request to ensure the safety of your family.</p>
      <p><strong>Pricing:</strong> Our transparent pricing is based on vehicle type and trip duration. Contact us for a detailed quote tailored to your specific travel plan.</p>
    </div>

    <div class="text-card">
      <h2>Terms and Conditions</h2>
      <p><strong>Service Availability:</strong> All services are subject to vehicle and driver availability. We recommend booking in advance to confirm your preferred dates.</p>
      <p><strong>Vehicle Use:</strong> Our chauffeur services are intended for private transfers and day tours. Eating, drinking, and smoking are not permitted inside the vehicles.</p>
      <p><strong>Cancellation Policy:</strong> Cancellations must be made in accordance with our booking policy to avoid charges. Details regarding cancellation fees will be provided at the time of booking.</p>
      <p><strong>No-Show Policy:</strong> Late arrival at the designated pickup location without prior notice may be considered a no-show, and applicable fees may apply.</p>
      <p><strong>Overtime Charges:</strong> Extra-hour charges are applicable and will be calculated based on the vehicle type and original booking duration.</p>
      <p><strong>Seasonal Surcharge:</strong> A peak season surcharge may be applied on specific dates. This will be clearly communicated during the booking process.</p>
      <p><strong>Tour Guides:</strong> The provided driver is not a licensed tour guide. A licensed tour guide can be arranged at an additional cost upon request.</p>
    </div>

    <div class="text-card">
      <h2>WanderWonderWorld's Destination Services</h2>
      <p>As a licensed Destination Management Company (DMC) in Dubai, WanderWonderWorld provides a full spectrum of exceptional tourism and transport solutions. Our car with driver services are designed to offer a seamless and professional experience, covering everything from efficient airport transfers to personalized city tours, business meetings, and relaxing family trips.</p>
      <p>We offer a wide range of vehicle options, including luxurious cars, spacious family vans, and comfortable tourist buses, all operated by professional and experienced drivers who assist you throughout your journey. For group bookings or complex travel plans, our dedicated team is ready to create a customized itinerary that perfectly matches your vision.</p>
    </div>
  </div>
</template>

<script>
import CarCard from '@/components/CarCard.vue'

import banner from '@/assets/images/banner7.jpg'
import logoGold from '@/assets/images/logo-www-gold.png'
import logoText from '@/assets/images/logo-text.png'
import car1 from '@/assets/images/cars/carcard1.jpg'
import car2 from '@/assets/images/cars/carcard2.jpg'
import car3 from '@/assets/images/cars/carcard3.jpg'
import car4 from '@/assets/images/cars/carcard4.jpg'

export default {
  name: 'Transfers',
  components: { CarCard },
  data() {
    return {
      banner,
      logoGold,
      logoText,
      car1,
      car2,
      car3,
      car4
    }
  }
}
</script>

<style scoped>
.transfers {
  font-family: 'Poppins', sans-serif;
}

/* Banner */
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
.floating-logos {
  position: absolute;
  top: 10px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.logo {
  height: 120px;
}
.logo-text {
  height: 130px;
  margin-top: -70px;
}

/* Intro */
.intro {
  max-width: 1000px;
  margin: 30px auto;
  text-align: left;
  padding: 0 20px;
}
.intro h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

/* Card container for 4 car cards */
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
}

/* Full-width Text Cards */
.text-card {
  background-color: #f8f8f8;
  margin: 50px auto;
  padding: 25px;
  border-radius: 8px;
  max-width: 1000px;
  line-height: 1.6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
.text-card h2 {
  font-size: 1.6rem;
  margin-bottom: 15px;
}
.text-card p {
  margin-bottom: 30px;
}
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 9999;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.whatsapp-float:hover {
  transform: scale(1.1);
}

.whatsapp-float img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.whatsapp-wrapper {
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9999;
}

.whatsapp-button {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px 15px;
  border-radius: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.whatsapp-button:hover {
  transform: scale(1.05);
}

.whatsapp-button img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.hover-reveal .whatsapp-text {
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.hover-reveal:hover .whatsapp-text {
  max-width: 200px;
  opacity: 1;
  margin-left: 10px;
}

</style>
