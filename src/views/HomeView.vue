<template>
  <div class="home">
    <ServiceItems />
    <AboutUs />
    <HelloWorldVue />
  </div>
</template>

<script>
// @ is an alias to /src
import ServiceItems from "@/components/ServicesItem.vue";
import AboutUs from "@/components/AboutUs.vue";
import HelloWorldVue from "@/components/HelloWorld.vue";
export default {
  components: {
    ServiceItems,
    AboutUs,
    HelloWorldVue,
  },
};
</script>
