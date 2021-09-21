<template>
  <div class="home">
    <div>
      Test Axios Service
      <div>
        <button @click="login()">Login</button>
      </div>

      <div>
        <button @click="fetchUserData()">Fetch User Data</button>
      </div>
      <div>{{name}}</div>
      <div>{{email}}</div>

    </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import service from "../axios-service";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data () {
    return {
      name : "",
      email : ""
    }
  },
  methods: {
    login() {
      let payload = {
        email: "zain@getnada.com",
        password: "Zain123",
      };
      service
        .post("auth/login", "dummyToken", payload)
        .then((res) => {
          localStorage.setItem("token",res.data.token)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchUserData() {
      service
        .post("auth/get-user", localStorage.getItem("token"))
        .then((res) => {
          console.log(res);
          this.name = res.data.name;
          this.email =  res.data.email
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
