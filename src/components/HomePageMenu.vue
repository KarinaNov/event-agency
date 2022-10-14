<template>
  <div class="header-bottom" :class="{ '-active': menuIsActive }">
    <nav class="header-navigation">
      <ul>
        <li class="nav-item text-1">
          <router-link to="/test">where?</router-link>
        </li>
        <li class="nav-item text-1">
          <router-link to="/test">who?</router-link>
        </li>
        <li class="nav-item text-1">
          <router-link to="/test">what?</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "v-menu",
  components: {},
  data() {
    return {
      menuIsActive: "",
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.nav-item {
  width: fit-content;
  position: absolute;
  z-index: 10;
  list-style: none;
  text-align: center;
}

.nav-item:nth-child(1) {
  top: calc(50% + 20px);
  left: 10px;
  transform: rotate(-90deg);
  transform-origin: 0% 0%;
}

.nav-item:nth-child(2) {
  bottom: 10px;
  left: calc(50% - 20px);
}

.nav-item:nth-child(3) {
  right: 30px;
  top: 50%;
  transform: rotate(90deg);
}

.nav-item a {
  position: relative;
  display: block;
  z-index: 10;
  text-decoration: none;
  color: black;
  user-select: none;
  transition: 0.4s ease;
}

.nav-item a::after {
  content: "";
  position: absolute;
  top: calc(100% + 3px);
  left: 0;
  width: 0;
  height: 2px;
  background: white;
  transition: 0.4s;
}

.nav-item a:hover {
  color: white;
}

.nav-item a:hover::after {
  width: 100%;
}

/* --- mobile --- */

@media screen and (max-width: 768px) {
  .burger-menu {
    opacity: 1;
  }

  .header-bottom {
    position: absolute;
    top: 85px;
    z-index: -1;
    width: 100%;
    height: calc(100vh - 85px);
    overflow: hidden;
    transition: 0.8s;
  }

  .header-bottom.-active {
    z-index: 100;
  }

  .header-navigation {
    height: 100%;
    background: #bebebe;
    transform: translateX(100%);
    transition: 0.4s;
  }

  .-active .header-navigation {
    transform: translateX(0%);
  }

  .header-navigation ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 150px;
  }

  .nav-item {
    position: static;
    width: fit-content;
    padding: 30px 0;
    transform: rotate(0deg);
  }

  .nav-item:nth-child(1),
  .nav-item:nth-child(2),
  .nav-item:nth-child(3) {
    transform: rotate(0deg);
  }
  .nav-item a {
    font-size: 32px;
  }
}
</style>
