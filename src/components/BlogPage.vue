<template>
  <div class="ml-100 text-primaryBlack text-7xl mt-52 font-bold">
    OUR SERVICE
  </div>
  <div class="mx-auto text-secondaryBlack mt-10 font-thin w-1/3">
    As a premier New York-based website and continues to nurture a multi-channel
  </div>
  <div class="flex justify-evenly mt-12">
    <div class="container1">
      <img src="../assets/blog_1.png" alt="blog_1" class="w-96 h-80" />
      <div class="border w-96">
        <div class="mt-5 text-left text-xl font-bold px-4">
          Winning Content Strategy for 2022: Thought Leadership
        </div>
        <p class="text-left text-md py-3 px-4 h-10">
          Lorem ipsum dolor sit amet, consec tetur adipiscing elitsed do eiusmod
          tempor incididunt ut labore et …….
        </p>
        <p class="text-left text-xs text-slate-400 py-3 px-4 mt-10">
          14-July-2022
        </p>
      </div>
    </div>
    <div class="container2">
      <img src="../assets/blog_2.png" alt="blog_1" class="w-96 h-80" />
      <div class="border w-96">
        <div class="mt-5 text-left text-xl font-bold px-4">
          Winning Content Strategy for 2022: Thought Leadership
        </div>
        <p class="text-left text-md py-3 px-4 h-10">
          Lorem ipsum dolor sit amet, consec tetur adipiscing elitsed do eiusmod
          tempor incididunt ut labore et …….
        </p>
        <p class="text-left text-xs text-slate-400 py-3 px-4 mt-10">
          14-July-2022
        </p>
      </div>
    </div>
    <div class="container3">
      <img src="../assets/blog_3.png" alt="blog_1" class="w-96 h-80" />
      <div class="border w-96">
        <div class="mt-5 text-left text-xl font-bold px-4">
          Winning Content Strategy for 2022: Thought Leadership
        </div>
        <p class="text-left text-md py-3 px-4 h-10">
          Lorem ipsum dolor sit amet, consec tetur adipiscing elitsed do eiusmod
          tempor incididunt ut labore et …….
        </p>
        <p class="text-left text-xs text-slate-400 py-3 px-4 mt-10">
          14-July-2022
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHover1: false,
      isHover2: false,
      isHover3: false,
      isHover4: false,
      isHover5: false,
      isHover6: false,
    };
  },
};
</script>
<style scoped>
.content:hover > div > div {
  color: black !important;
}
.content:hover > p {
  color: white !important;
}
.textBlack {
  color: black !important;
}
.container1 {
  position: relative;
  overflow: hidden;
  z-index: 9999;
}
.container1::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #e5e5e5;
  opacity: 0;
  transition: 0.5s ease all;
}
img {
  transition: 0.5s ease all;
  object-fit: cover;
}
.container1:hover img {
  transform: scale(1.05);
}

.container1:hover::after {
  opacity: 0.2;
}
.container2 {
  position: relative;
  overflow: hidden;
  z-index: 9999;
}
.container2::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #e5e5e5;
  opacity: 0;
  transition: 0.5s ease all;
}
img {
  transition: 0.5s ease all;
  object-fit: cover;
}
.container2:hover img {
  transform: scale(1.05);
}

.container2:hover::after {
  opacity: 0.2;
}
.container3 {
  position: relative;
  overflow: hidden;
  z-index: 9999;
}
.container3::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #e5e5e5;
  opacity: 0;
  transition: 0.5s ease all;
}
img {
  transition: 0.5s ease all;
  object-fit: cover;
}
.container3:hover img {
  transform: scale(1.05);
}

.container3:hover::after {
  opacity: 0.2;
}
</style>
