<template>
  <div class="home">
    <ServiceItems />
    <AboutUs />
    <ProjectPageVue />
  </div>
</template>

<script>
// @ is an alias to /src
import ServiceItems from "@/components/ServicesItem.vue";
import AboutUs from "@/components/AboutUs.vue";
import ProjectPageVue from "@/components/ProjectPage.vue";
export default {
  components: {
    ServiceItems,
    AboutUs,
    ProjectPageVue,
  },
};
</script>
