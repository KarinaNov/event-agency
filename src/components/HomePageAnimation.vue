<template>
  <div class="animation-block">
    <div class="animation-line-1">
      <img src="@/assets/images/animation-text.svg" alt="" />
      <img src="@/assets/images/animation-text.svg" alt="" />
    </div>
    <div class="animation-line-2">
      <img src="@/assets/images/animation-text.svg" alt="" />
      <img src="@/assets/images/animation-text.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.animation-block {
  position: absolute;
  top: calc(50% - 250px);
  left: calc(50% - 250px);
  width: 525px;
  height: 600px;
}
.bg-elements .animation-line-1 {
  display: flex;
  margin-top: 230px;
  z-index: 1;
  user-select: none;
  animation: animation1 14s linear infinite;
}

.bg-elements .animation-line-2 {
  display: flex;
  margin-top: 54px;
  z-index: 1;
  user-select: none;
  animation: animation2 14s linear infinite;
}

@keyframes animation1 {
  0% {
    transform: rotate(150deg) translateX(-200%);
  }

  100% {
    transform: rotate(150deg) translateX(-500%) translateY(0);
  }
}

@keyframes animation2 {
  0% {
    transform: rotate(-30deg) translateX(-200%) translateY(0);
  }

  100% {
    transform: rotate(-30deg) translateX(-500%) translateY(0);
  }
}
</style>
