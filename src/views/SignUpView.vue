<script lang="ts">
import BaseInput from '../components/BaseInput.vue';
import BaseButton from "@/components/BaseButton.vue";
import axios from "axios";
import {defineComponent} from "vue";

export default defineComponent ({
  components: {
    BaseButton,
    BaseInput
  },
  data() {
    return {
      emailText: "",
      passwordText: ""
    }
  },
  methods: {
    signup : function () {
      axios.post("http://localhost:8080/api/v1/auth/users/signup", {
        username: this.emailText,
        password: this.passwordText
      }).then(function (response) {
        alert(response.data ? "Sign up successful" : "Sign up failed")
      }).catch(function (error) {
            alert("Sign up failed")
          }
      )
    }
  }
})
</script>
<template>
  <form class="register" @submit.prevent="signup" id="signupForm">
    <BaseInput type="text" label="Email" v-model="emailText"></BaseInput>
    <BaseInput type="password" label="Password" v-model="passwordText"></BaseInput>
    <BaseButton>Sign up</BaseButton>
  </form>
</template>
