<template>
  <div id="app">
    <transition :name="animName">
      <router-view/>
    </transition>
  </div>
</template>
<script>
import "normalize.css";
export default {
  name: "app",
  data() {
    return {
      animName: ""
    };
  },
};
</script>

<style>
/* @keyframes slideInLeft {
  from {
    transform: translateX(100%);
    opacity: 1;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideInRight {
  from {
    transform: translateX(-100%);
    opacity: 1;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideLeftOut {
  from {
    transform: translateX(0);
    opacity: 0;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
@keyframes slideRightOut {
  from {
    transform: translateX(0);
    opacity: 0;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
.slide-left-enter-active {
  animation: slideInLeft 0.23s forwards;
}

.slide-left-leave-active {
  animation: slideLeftOut 0.23s forwards;
}
.slide-right-enter-active {
  animation: slideInRight 0.23s forwards;
}

.slide-right-leave-active {
  animation: slideRightOut 0.23s forwards;
} */
</style>
