<template>
  <div>
    <div class="video-wrapper">
      <video autoplay muted loop id="myVideo">
        <source src="../src/assets/Infinity.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <nav
        class="fixed top-0 left-0 right-0 mx-auto p-6 bg-primaryBlue"
        :class="{ 'bg-transparent': !isActive }"
      >
        <div class="flex items-center justify-between">
          <div class="pt-2">
            <img
              src="../src/assets/img/logo.png"
              alt="logo"
              class="h-16 w-64"
            />
          </div>
          <div class="hidden md:flex space-x-14">
            <a href="#" class="hover:text-black text-white">Service</a>
            <a href="#" class="hover:text-black text-white">About Us</a>
            <a href="#" class="hover:text-black text-white">Project</a>
            <a href="#" class="hover:text-black text-white">Blog</a>
            <a href="#" class="hover:text-black text-white">Join Us</a>
          </div>
          <a
            href="#"
            class="p-3 px-6 pt-2 text-white border-solid border-2 border-white baseline hover:text-primaryBlue hover:rounded-2xl hover:bg-white transition-all duration-120"
            >Contact Us</a
          >
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "servicesItem",
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 150) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ebeae8;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
video {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.video-wrapper {
  border: 2px solid #000;
  width: 1920px;
  height: 1080px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.nav_active {
  background-color: blue;
}
</style>
