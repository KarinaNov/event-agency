<template>
  <button class="btn"></button>
</template>

<script>
</script>

<style>
.btn {
  position: relative;
  z-index: 5;
  width: 118px;
  height: 118px;
  margin-top: 58px;
  margin-right: 240px;
  border: 1px solid transparent;
  border-radius: 50%;
  background-color: transparent;
  background-image: url("@/assets/images/buttons.svg");
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
}

@keyframes btnAnimation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}

@media screen and (hover: hover) {
  .btn:hover {
    animation: btnAnimation 5s linear infinite;
  }
}

/* --- tablet --- */

@media screen and (max-width: 1024px) {
  .btn {
    width: 112px;
    height: 112px;
    margin-top: 48px;
  }
}

/* --- mobile --- */

@media screen and (max-width: 768px) {
  .btn {
    margin-top: 35px;
    margin-right: 150px;
  }
}

@media screen and (max-width: 620px) {
  .btn {
    width: 90px;
    height: 90px;
    margin-top: 35px;
    margin-right: 60px;
  }
}
</style>
