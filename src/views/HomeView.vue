<template>
  <div class="home">
    <ServiceItems />
    <AboutUs />
    <ProjectPageVue />
    <BlogPage />
  </div>
</template>

<script>
// @ is an alias to /src
import ServiceItems from "@/components/ServicesItem.vue";
import AboutUs from "@/components/AboutUs.vue";
import ProjectPageVue from "@/components/ProjectPage.vue";
import BlogPage from "@/components/BlogPage.vue";
export default {
  components: {
    ServiceItems,
    AboutUs,
    ProjectPageVue,
    BlogPage,
  },
};
</script>
