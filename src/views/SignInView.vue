<script lang="ts">
import axios from "axios";


import BaseInput from '../components/BaseInput.vue';
import BaseButton from "@/components/BaseButton.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignInView",
  components: {
    BaseButton,
    BaseInput
  },
  data() {
    return {
      emailText: '',
      passwordText: ''
    }
  },
  methods: {
    login : function () {
      axios.post("http://localhost:8080/api/v1/auth/users/signin", {
        username: this.emailText,
        password: this.passwordText
      }).then(function (response) {
          alert(response.data ? "Login successful" : "Login failed")
      }).catch(function (error) {
        alert("Login failed")
      })
    }
  }
}
)
</script>

<template>
  <div class="register">
    <BaseInput v-model="emailText" type="text" label="Email" />
    <BaseInput v-model="passwordText" id="password" type="Password" label="password" />
    <BaseButton @click="login()">Sign in</BaseButton>
  </div>
</template>
