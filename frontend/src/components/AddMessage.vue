<template>
  <div class="msg-box">
    <b-input
      placeholder="Ex: Hello world"
      v-model="message"
      type="textarea"
      class="inp-box"
      maxlength="100"
    >
    </b-input>
    <div class="btn-box">
      <b-button class="btn" @click="addMessage" type="is-success">
        Send
      </b-button>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import tokenConfig from "../auth";
import io from "socket.io-client";
const socket = io.connect("https://thc-chat-app.herokuapp.com");
import axios from "axios";
export default {
  data() {
    return {
      message: null,
    };
  },
  methods: {
    async addMessage() {
      if (this.message) {
        try {
          let { data } = await axios.post(
            "api/messages/create",
            {
              userName: localStorage.getItem("userName"),
              text: this.message,
            },
            tokenConfig()
          );
          this.message = null;
          socket.emit("newMessage", data);
        } catch (err) {
          // if token expires then user should login again
          this.$emit("logout");
        }
      }
    },
  },
};
</script>

<style scoped>
.btn-box {
  width: 100%;
  text-align: center;
}
.btn {
  width: 40%;
  border-radius: 10px;
}
/* @media only screen and (max-width: 700px) { */
/* .btn-box { */
/* position: relative; */
/* bottom: 2vh; */
/* } */
/* } */
</style>