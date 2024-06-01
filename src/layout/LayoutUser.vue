<template >
    <div>
      <Navbar/>
      <router-view/> 
      <Footer/>
     
    </div>
  </template>
  <script setup>
  import Navbar from "../components/NavbarComponent.vue"
  import Footer from "../components/FooterComponent.vue";
  </script>
  <style >
    
  </style>