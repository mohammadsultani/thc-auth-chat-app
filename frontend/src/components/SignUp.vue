<template>
  <div class="main">
    <!-- Navbar -->
    <div class="navbar-custom">
      <p class="nav-item" @click="isSignUp = false">Sign In</p>
      <p class="nav-item" @click="isSignUp = true">Sign Up</p>
    </div>
    <!-- Card -->
    <div class="custom">
      <form @submit.prevent="submitForm">
        <b-field class="inp" label="Username" label-position="on-border">
          <b-input
            value="ex: johnsilver"
            v-model="username"
            maxlength="10"
            minlength="3"
            required
          >
          </b-input>
        </b-field>
        <b-field class="inp" label="Password" label-position="on-border">
          <b-input
            type="password"
            v-model="password"
            maxlength="10"
            minlength="5"
            required
            password-reveal
          >
          </b-input>
        </b-field>
        <b-field
          v-if="isSignUp"
          class="inp"
          label="Confirm Password"
          label-position="on-border"
        >
          <b-input
            type="password"
            v-model="confPassword"
            maxlength="10"
            minlength="5"
            required
            password-reveal
          >
          </b-input>
        </b-field>
        <!-- Button -->
        <div class="btn">
          <b-button class="action-btn" type="is-primary" native-type="submit">
            {{ isSignUp ? "Sign Up" : "Sign In" }}
          </b-button>
        </div>
      </form>
    </div>
    <!-- Error messages -->
    <div v-if="errorMessage" class="alert">
      <b-message type="is-danger">
        {{ errorMessage }}
      </b-message>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      username: null,
      password: null,
      confPassword: null,
      errorMessage: null,
      isSignUp: false,
    };
  },
  methods: {
    submitForm() {
      this.errorMessage = null;
      if (this.password !== this.confPassword && this.isSignUp)
        return (this.errorMessage = "Passwords Do not match!!");
      if (this.isSignUp) return this.signUp();
      else return this.signIn();
    },
    async signUp() {
      try {
        const { data } = await axios.post("/api/users/signup", {
          userName: this.username,
          password: this.password,
        });
        localStorage.setItem("userName", data.userName);
        localStorage.setItem("token", data.token);
        this.$emit("verify");
      } catch (err) {
        this.errorMessage = "User Already Exist!!";
      }
    },
    async signIn() {
      this.errorMessage = null;
      try {
        let { data } = await axios.post("/api/users/login", {
          userName: this.username,
          password: this.password,
        });
        localStorage.setItem("userName", data.userName);
        localStorage.setItem("token", data.token);
        this.$emit("verify");
      } catch (err) {
        this.errorMessage = "Invalid Credential !!";
      }
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
}
.navbar-custom {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 5vw;
  width: 100%;
  height: 15vh;
  align-items: center;
  background-color: #090a29;
}
.nav-item {
  color: aliceblue;
  margin-left: 5vw;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
}
.nav-item:hover {
  color: aqua;
}
.custom {
  margin: auto auto;
  margin-top: 20vh;
  width: 50%;
  padding: 40px 10px 10px 10px;
  text-align: center;
  box-shadow: 5px 5px 10px 2px grey;
}
.inp {
  margin: 0 auto;
  width: 60%;
}
.alert {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 790px) {
  .inp,
  .custom {
    width: 90%;
  }
  .navbar-custom {
    justify-content: space-around;
  }
  .nav-item {
    font-size: 16px;
  }
}
</style>