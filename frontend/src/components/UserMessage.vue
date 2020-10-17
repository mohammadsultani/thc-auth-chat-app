<template>
  <div :class="['main', userName === message.userName ? 'custom-main' : null]">
    <div class="username">
      <b-icon icon="account-circle-outline" size="is-medium"></b-icon>
      <p class="name">{{ message.userName }}</p>
    </div>
    <div class="message">
      <p class="text">{{ message.text }}</p>
      <p class="date">
        {{ transformDateAndTime(message.createdAt) }}
      </p>
    </div>
    <div :class="['btn', userName === message.userName ? 'visible' : 'hide']">
      <button
        class="button is-danger is-rounded"
        @click="deleteMessage(message._id)"
      >
        x
      </button>
    </div>
  </div>
</template>

<script>
import tokenConfig from "../auth";
import io from "socket.io-client";
const socket = io.connect("https://thc-chat-app.herokuapp.com");
import moment from "moment-timezone";
import axios from "axios";
export default {
  props: ["message"],
  data() {
    return {
      userName: localStorage.getItem("userName"),
    };
  },
  methods: {
    transformDateAndTime(string) {
      var userLocation = moment.tz.guess();
      var parsedTime = moment(string).tz(userLocation).format();
      return moment(parsedTime).calendar();
    },
    async deleteMessage(_id) {
      try {
        await axios.delete(`api/messages/delete/${_id}`, tokenConfig());
        socket.emit("deleteMessage", _id);
      } catch (err) {
        // if token expires then user should login again
        this.$emit("logout");
      }
    },
  },
};
</script>

<style scoped>
.main {
  height: 100%;
  display: flex;
  flex-direction: row;
  margin: 10px;
  align-items: center;
}
.custom-main {
  flex-direction: row-reverse;
}
.username {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.message {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 3;
  align-items: center;
  margin-right: 10px;
  border-radius: 10px;
  padding: 5px 5px 0px 5px;
  min-height: 40px;
  white-space: pre-wrap;
}
.btn {
  display: flex;
  justify-content: center;
  flex: 1;
}
.date {
  font-weight: bold;
}
.visible {
  visibility: visible;
}
.hide {
  visibility: hidden;
}
button {
  margin-bottom: 10px;
}
button:hover {
  transition: 3s;
  transform: rotateZ(360deg);
}
@media only screen and (max-width: 790px) {
  .button {
    width: 4vw;
    height: 5vh;
    margin-bottom: 15px;
    text-align: center;
  }
  .main {
    margin: 1px 2px;
    font-size: 12px;
  }
  .delete-btn {
    font-size: 15px;
    width: 30px;
  }
  .message {
    font-size: 13px;
  }
  .date {
    font-size: 12px;
  }
}
</style>