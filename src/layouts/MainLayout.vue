<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawerRight" fixed right clipped app>
            <v-list dense>
                <v-list-tile @click.stop="right = !right">
                    <v-list-tile-action>
                        <v-icon>exit_to_app</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="blue-grey" dark fixed app clipped-right>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Toolbar</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" fixed app>
            <v-list dense>
                <v-list-tile @click.stop="left = !left">
                    <v-list-tile-action>
                        <v-icon>exit_to_app</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-navigation-drawer v-model="left" temporary fixed></v-navigation-drawer>
        <v-content>
            <v-container fluid fill-height>
                <v-layout justify-center align-center>
                    <router-view/>
                </v-layout>
            </v-container>
        </v-content>
        <v-navigation-drawer v-model="right" right temporary fixed></v-navigation-drawer>
        <v-footer color="blue-grey" class="white--text" app>
            <span>Vuetify</span>
            <v-spacer></v-spacer>
            <span>&copy; 2017</span>
        </v-footer>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'main-layout',
  props: {

  }
  })

export default class MainLayout extends Vue {
        // Data
        drawer = false
        drawerRight = false
        right = false
        left = false
}
</script>
