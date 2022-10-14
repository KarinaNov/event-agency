<template>
  <div class="main-block">
    <HomePageHeader />
    <div class="bg-elements">
      <VCircle />
      <HomePageAnimation />
    </div>
    <div class="content-block">
      <VTitle />
      <VButton />
    </div>
  </div>
</template>

<script>
import VTitle from "@/components/ui/ui-title.vue";
import HomePageHeader from "@/components/HomePageHeader.vue";
import VButton from "../components/ui/ui-button.vue";
import HomePageAnimation from "@/components/HomePageAnimation.vue";
import VCircle from "../components/ui/ui-circle.vue";
export default {
  components: { VTitle, HomePageHeader, VButton, HomePageAnimation, VCircle },
};
</script>

<style>
.main-block {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #bebebe;
  overflow: hidden;
}
.content-block {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 3;
}

@import "../assets/styles/main.scss";
</style>
