<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/">home</router-link>
    <a @click.prevent="handleTest">Test</a>
  </div>
</template>

<script>
  import getAxios from "@/configs/axios";
  
  export default {
    methods: {
      handleTest() {
        getAxios().get("api/v1/user/profile")
          
      }
    }
  };
</script>
