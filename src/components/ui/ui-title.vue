<template>
  <div class="title-wrapper">
    <div class="magnetic-area magnetic-size" ref="magnetic"></div>
    <h2 class="title-1">FULL-CYCLE EVENT AGENCY</h2>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { onMounted, ref } from "vue";

const magnetic = ref(null);

onMounted(() => {
  const mContent = magnetic.value.nextElementSibling;

  function parallaxIt(e, target) {
    const boundingRect = magnetic.value.getBoundingClientRect();
    const relX = e.pageX - boundingRect.left;
    const relY = e.pageY - boundingRect.top;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    gsap.to(target, {
      x: (relX - boundingRect.width / 2) / 10,
      y: (relY - boundingRect.height / 2 - scrollTop) / 10,
      ease: "power1",
      duration: 0.8,
    });
  }

  function callParallax(e) {
    parallaxIt(e, mContent);
  }

  magnetic.value.addEventListener("mousemove", function (e) {
    callParallax(e);
  });
});
</script>

<style>
.magnetic-area {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
}

.title-1 {
  margin-top: 150px;
  max-width: 1050px;
  font-style: normal;
  font-weight: 700;
  font-size: 82px;
  line-height: 90px;
  text-align: center;
  text-transform: uppercase;
  color: #373737;
}

@media screen and (max-width: 1151px) {
  .title-1 {
    max-width: 900px;
    font-size: 70px;
  }
}

@media screen and (max-width: 768px) {
  .title-1 {
    max-width: 700px;
    font-size: 42px;
    line-height: 60px;
  }
}

@media screen and (max-width: 620px) {
  .title-1 {
    max-width: 520px;
    font-size: 32px;
  }
}

@media screen and (max-width: 480px) {
  .title-1 {
    max-width: 370px;
  }
}
</style>

