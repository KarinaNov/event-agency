<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in" appear>
      <component :is="Component" />
    </transition>
  </router-view>
  <div
    :class="['page-transition', { 'route-change': routeChange }]"
    ref="pageTransition"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      routeChange: false,
    };
  },

  watch: {
    $route(to, from) {
      const routeDeep = ["/", "/week"];
      const toDepth = routeDeep.indexOf(to.path);
      const fromDepth = routeDeep.indexOf(from.path);
      this.fade = toDepth > fromDepth ? "slide-left" : "slide-right";
      if (this.routeName) {
        this.routeChange = true;
        setTimeout(() => (this.routeChange = false), 1500);
      }
      this.routeName = this.$route.name;
    },
  },
  mounted() {
    this.pageIsLoaded = true;
  },
};
</script>

<style lang="scss">
.app {
  background-color: black;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  pointer-events: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.page-transition {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffcb46;
  transform: skewX(10deg) translateX(120%);

  &.route-change {
    animation: slideRight 1.5s forwards ease-in-out;
  }
}

@keyframes slideRight {
  0% {
    transform: skewX(20deg) translateX(-120%);
  }

  30%,
  70% {
    transform: skewX(0deg) translateX(0);
  }

  100% {
    transform: translateX(100%);
  }
}
@media screen and (max-width: 620px) {
    .page-transition{
        opacity: 0;
    }
}
</style>
