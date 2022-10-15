<template>
  <div class="home">
    <ServiceItems />
  </div>
</template>

<script>
// @ is an alias to /src
import ServiceItems from "@/components/ServicesItem.vue";
export default {
  components: {
    ServiceItems,
  },
};
</script>
