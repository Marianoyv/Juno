<template>
  <div id="app">
    <h1>Vue: Text Transition Example</h1>
    <Transition mode="out-in" name="fade-in">
      <div class="text" :key="text">{{text}}</div>
    </Transition>
    <button @click="toggleTransition">Toggle Transition</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      text: "Old Text"
    };
  },
  methods: {
    toggleTransition() {
      this.text = this.text === "Old Text" ? "New Text" : "Old Text";
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.text {
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  z-index: 100;
  
}

.fade-in-enter-active {
  transition: opacity 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.fade-in-leave-active {
  transition: opacity 225ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
}
</style>
