<template>
  <div tabindex="1" class="language" @click="selected($event)">
    <div class="language__img">
      <img
        src="@/assets/images/tongue.png"
        alt="LangSelector"
        width="15"
        height="21"
      />
    </div>
    <div>
      <span class="language__option_ua">UA</span>
      <span class="language__option_en">EN</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LangSelector",
  methods: {
    selected(e) {
      this.$emit("selectedLang", e.target);
    },
  },
};
</script>

<style lang="scss">
.language {
  position: absolute;
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }

  &__img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.911);
    img {
      display: block;
      margin: 0 auto;
      transform: translateY(50%);
    }
  }
  span {
    margin: 0 10px;
    opacity: 0;
    transition: all;
  }

  &:hover &__option_ua,
  &:active &__option_ua {
    animation: ani 1.5s forwards;
  }

  &:hover &__option_en,
  &:active &__option_en {
    animation: ani 2.5s forwards;
    animation-delay: 0.5s;
  }

  @keyframes ani {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
@media screen and (max-width: 620px) {
  .language__option_ua,
  .language__option_en{
    font-size: 12px;
  }
}

</style>
