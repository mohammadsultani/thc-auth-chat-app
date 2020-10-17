<template>
  <div id="app">
    <SignUp v-if="!isVerified" @verify="isLoggedIn" />
    <Chats v-else @verify="isLoggedIn" />
  </div>
</template>

<script>
import SignUp from "./components/SignUp";
import Chats from "./components/Chats";
export default {
  name: "App",
  data() {
    return {
      isVerified: false,
    };
  },
  components: {
    SignUp,
    Chats,
  },
  mounted() {
    this.isLoggedIn();
  },
  methods: {
    // This function verify if the user is logged in
    isLoggedIn() {
      const userName = localStorage.getItem("userName");
      if (userName) {
        this.isVerified = true;
      } else {
        this.isVerified = false;
      }
    },
  },
};
</script>

<style>
html,
body,
html,
body,
#app {
  min-height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: auto;
}

::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
</style>
