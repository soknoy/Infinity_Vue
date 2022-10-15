<template>
  <div class="home">
    <ServiceItems />
    <AboutUs />
  </div>
</template>

<script>
// @ is an alias to /src
import ServiceItems from "@/components/ServicesItem.vue";
import AboutUs from "@/components/AboutUs.vue";
export default {
  components: {
    ServiceItems,
    AboutUs,
  },
};
</script>
