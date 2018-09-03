<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/">home</router-link>
    <a @click.prevent="handleTest">Test</a>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    handleTest() {
      axios
        .get("http://localhost:8888/api/v1/user/profile", {
          params: {
            ID: 12345
          }
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
