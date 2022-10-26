<template>
  <div class="mx-auto text-primaryBlack text-7xl mt-52 font-bold">ABOUT US</div>
  <div class="mx-auto text-secondaryBlack mt-10 font-thin w-1/3">
    With our group of talented and innovative people who passionate about
    Technology
    <span class="text-primaryBlue font-bold">based in Cambodia</span>. We're one
    of the
    <span class="text-primaryBlue font-bold"
      >leading full-stack tech solution agency in Asian</span
    >
    focused on delivering the finest and most significant results to fulfill the
    client’s requirements.
  </div>
  <div class="flex justify-evenly mt-12">
    <div class="inline-flex pt-5 relative">
      <div @mouseover="hoverImage1 = true" @mouseout="hoverImage1 = false">
        <div
          id="image1"
          class="h-96 w-96"
          :class="{ hoverImage1: hoverImage1 }"
        >
          <div
            class="absolute text-2xl font-extrabold top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
            :class="{ invisible: hoverImage1 }"
          >
            MISSION & VISION
          </div>
        </div>
        <div
          class="absolute text-2xl font-extrabold text-black top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full header1"
          :class="{
            invisible: !hoverImage1,
            title: hoverImage1,
          }"
          @mouseover="hoverImage1 = true"
        >
          MISSION & VISION
        </div>
        <div
          class="absolute text-base font-medium text-grey top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 paragraph1"
          :class="{ invisible: !hoverImage1 }"
          @mouseover="hoverImage1 = true"
        >
          Our mission and vision are to create the greatest technology for
          everyday life and to build value through employees by creating an
          atmosphere of optimism, teamwork, creativity, and resourcefulness.
        </div>
      </div>
    </div>
    <div class="inline-flex pt-5 relative">
      <div @mouseover="hoverImage2 = true" @mouseout="hoverImage2 = false">
        <div
          id="image2"
          class="h-96 w-96"
          :class="{ hoverImage2: hoverImage2 }"
        >
          <div
            class="absolute text-2xl font-extrabold top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
            :class="{ invisible: hoverImage2 }"
          >
            OUR OFFICE
          </div>
        </div>
        <div
          class="absolute text-2xl font-extrabold text-black top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full header1"
          :class="{
            invisible: !hoverImage2,
            title: hoverImage2,
          }"
          @mouseover="hoverImage2 = true"
        >
          OUR OFFICE
        </div>
        <div
          class="absolute text-base font-medium text-grey top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 paragraph1"
          :class="{ invisible: !hoverImage2 }"
          @mouseover="hoverImage2 = true"
        >
          Our mission and vision are to create the greatest technology for
          everyday life and to build value through employees by creating an
          atmosphere of optimism, teamwork, creativity, and resourcefulness.
        </div>
      </div>
    </div>
    <div class="inline-flex pt-5 relative">
      <div @mouseover="hoverImage3 = true" @mouseout="hoverImage3 = false">
        <div
          id="image3"
          class="h-96 w-96"
          :class="{ hoverImage3: hoverImage3 }"
        >
          <div
            class="absolute text-2xl font-extrabold top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
            :class="{ invisible: hoverImage3 }"
          >
            ACHIEVEMENT
          </div>
        </div>
        <div
          class="absolute text-2xl font-extrabold text-black top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full header1"
          :class="{
            invisible: !hoverImage3,
            title: hoverImage3,
          }"
          @mouseover="hoverImage3 = true"
        >
          ACHIEVEMENT
        </div>
        <div
          class="absolute text-base font-medium text-grey top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 paragraph1"
          :class="{ invisible: !hoverImage3 }"
          @mouseover="hoverImage3 = true"
        >
          Our mission and vision are to create the greatest technology for
          everyday life and to build value through employees by creating an
          atmosphere of optimism, teamwork, creativity, and resourcefulness.
        </div>
      </div>
    </div>
  </div>
  <div class="mt-24">
    <button
      class="relative border-2 w-56 h-12 border-primaryBlue bg-transparent py-2.5 px-5 font-bold text-xl uppercase text-gray-500 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primaryBlue before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
    >
      SEE MORE
    </button>
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
