<template>
  <div class="mx-auto text-primaryBlack text-7xl mt-52 font-bold">PROJECT</div>
  <div class="mx-auto text-secondaryBlack mt-10 font-thin w-1/3">
    We're one of the As a premier New York-based website
    <span class="text-primaryBlue font-bold"
      >design and development company</span
    >, Lounge Lizard has created and continues to nurture a multi-channel
    digital marketing agency with super creative proficiency in all things
    marketing-related. From industry-leading digital design and development to
    maximized socia
  </div>
  <div class="grid grid-cols-3 gap-4 mt-24">
    <div class="col-span-2">
      <div class="grid grid-cols-2 gap-4">
        <div class="relative col-span-2 px-10">
          <img src="../assets/shamu.png" alt="shamu" class="w-full h-full" />
          <button
            class="absolute border-2 w-56 h-12 normal-case border-purleShamu bg-transparent top-80 left-24 py-2.5 px-5 font-bold text-xl text-white before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primaryBlue before:transition-transform before:duration-300 before:content-[''] hover:text-white hover:rounded-xl hover:bg-purleShamu transition-all duration-120 before:hover:scale-x-100"
          >
            Learn more >
          </button>
        </div>
        <div class="relative px-10 pt-10">
          <img src="../assets/orkun.png" alt="orkunapp" class="w-full h-full" />
          <button
            class="absolute border-2 w-56 h-12 normal-case border-black bg-transparent mt-4 top-1/4 left-1/3 py-2.5 px-5 font-bold text-xl text-black before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-orkun hover:rounded-xl hover:bg-black transition-all duration-120 before:hover:scale-x-100"
          >
            Learn more >
          </button>
        </div>
        <div class="relative px-10 pt-10">
          <img src="../assets/icow.png" alt="icow" class="w-full h-full" />
          <button
            class="absolute border-2 w-56 h-12 normal-case border-icow bg-transparent top-40 left-1/3 py-2.5 px-5 font-bold text-xl text-icow before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-slate-300 hover:rounded-xl hover:bg-icow transition-all duration-120 before:hover:scale-x-100"
          >
            Learn more >
          </button>
        </div>
      </div>
    </div>
    <div>
      <div class="grid grid-cols-2 gap-4">
        <div class="relative col-span-2 px-10">
          <img src="../assets/umpay.png" alt="umpay" class="w-full h-full" />
          <button
            class="absolute border-2 w-56 h-12 normal-case border-black bg-transparent mt-4 top-40 left-1/3 py-2.5 px-5 font-bold text-xl text-black before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-umpay hover:rounded-xl hover:bg-black transition-all duration-120 before:hover:scale-x-100"
          >
            Learn more >
          </button>
        </div>
        <div class="relative col-span-2 px-10 pt-12">
          <img src="../assets/flash.png" alt="flash" class="w-full h-full" />
          <button
            class="absolute border-2 w-56 h-12 normal-case border-white bg-transparent mt-4 top-40 left-1/3 py-2.5 px-5 font-bold text-xl text-white before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-flash hover:rounded-xl hover:bg-white transition-all duration-120 before:hover:scale-x-100"
          >
            Learn more >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hoverImage1: false,
      hoverImage2: false,
      hoverImage3: false,
    };
  },
};
</script>
<style scoped>
.content:hover > p > i {
  color: white;
}
.content:hover > div > div,
.content:hover > p {
  color: #6c6c6c;
}
#image1 {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0px,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url("../assets/aboutus_1.png");
  background-size: cover;
  color: white;
  padding: 20px;
  height: 512px;
}
.hoverImage1 {
  opacity: 0.3;
}
.hoverImage2 {
  opacity: 0.3;
}
.hoverImage3 {
  opacity: 0.3;
}

#image2 {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0px,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url("../assets/aboutus_2.png");
  background-size: cover;
  color: white;
  padding: 20px;
  height: 512px;
}
#image3 {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0px,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url("../assets/aboutus_3.png");
  background-size: cover;
  color: white;
  padding: 20px;
  height: 512px;
}
.title {
  animation: movedown 0.2s;
  animation-direction: alternate;
}
@keyframes movedown {
  0% {
    left: 192px;
    top: 0px;
  }
  100% {
    left: 192px;
    top: 178px;
  }
}
</style>
