<template>
  <div class="grid grid-cols-5 mt-24">
    <div class="col-span-3">
      <div class="grid grid-cols-2 gap-4">
        <div>Join our team</div>
        <div>
          Be Part of Infinity Family Lorem ipsum dolor sit amet, consec tetur
          adipiscing elitsed do eiusmod tempor incididunt ut labore Lorem ipsum
          dolor sit amet, consectetur adipiscing
        </div>
        <button
          class="border-2 w-56 h-12 border-primaryBlue bg-transparent py-2.5 px-5 font-bold text-xl uppercase text-gray-500 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primaryBlue before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
        >
          SEE MORE
        </button>
      </div>
    </div>
    <div>
      <div class="grid grid-cols-2 gap-4">hi</div>
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
