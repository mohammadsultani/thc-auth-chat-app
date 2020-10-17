<template>
  <div class="chats">
    <div class="logout">
      <b-button type="is-white" icon-left="logout" @click="logout"
        >Logout</b-button
      >
    </div>
    <div class="messages">
      <UserMessage
        v-for="message in messages"
        :key="message._id"
        :message="message"
        @logout="logout"
      />
    </div>
    <div class="send-message">
      <AddMessage @logout="logout" />
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
const socket = io.connect("https://thc-chat-app.herokuapp.com");
import tokenConfig from "../auth";
import axios from "axios";
import UserMessage from "./UserMessage.vue";
import AddMessage from "./AddMessage.vue";
export default {
  components: {
    UserMessage,
    AddMessage,
  },
  data() {
    return {
      messages: [], // Array of messages,
    };
  },
  methods: {
    scroll() {
      const messages = document.querySelectorAll(".main");
      messages[messages.length - 1].classList.add("last-main");
      document.querySelector(".last-main").scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
      messages[messages.length - 1].classList.remove("last-main");
    },
    logout() {
      localStorage.clear();
      this.$emit("verify");
    },
  },
  async mounted() {
    try {
      let { data } = await axios.get("api/messages", tokenConfig());
      this.messages = data;
    } catch (err) {
      // If fail to fetch data then logout user.
      this.logout();
    }
  },
  created() {
    socket.on("addMessage", (message) => {
      this.messages.push(message);
      this.$nextTick(() => {
        this.scroll();
      });
    });
    socket.on("messageDeleted", (id) => {
      this.messages = this.messages.filter(({ _id }) => _id !== id);
    });
  },
};
</script>

<style scoped>
body {
  background: snow;
}
.chats {
  display: flex;
  height: 100vh;
  width: 50%;
  margin: 0 auto;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  background: #f1d6d0;
  box-shadow: 10px 10px 15px grey;
}
.messages {
  height: 100vh;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.send-message {
  width: 100%;
  flex-grow: 5;
}
@media only screen and (max-width: 700px) {
  .chats {
    height: auto;
    width: 100%;
    padding-top: 0px;
  }
}
</style>