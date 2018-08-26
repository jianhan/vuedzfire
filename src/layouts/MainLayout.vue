<template>
    <v-app id="inspire">
        <MainTopNavigation/>
        <v-content>
            <v-container fluid fill-height>
                <v-layout justify-center align-center>
                    <router-view/>
                </v-layout>
            </v-container>
        </v-content>
        <MainFooter/>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import MainTopNavigation from './MainTopNavigation.vue';
import MainFooter from './MainFooter.vue';

@Component({
  components: {
  MainTopNavigation,
  MainFooter
  }
  })

export default class MainLayout extends Vue {

}
</script>
