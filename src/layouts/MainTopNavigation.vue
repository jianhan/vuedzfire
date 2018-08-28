<template>
    <div>
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
        <v-toolbar color="pink darken-1" dark fixed app clipped-right>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="ml-0 pl-3 pr-3">Toolbar</v-toolbar-title>
            <v-text-field flat solo-inverted hide-details prepend-inner-icon="search" label="Search" class="hidden-sm-and-down"></v-text-field>
            <v-spacer></v-spacer>
            <AuthDialog>
                <v-btn icon @click.stop="showDialog" slot="loginBtn">
                    <v-icon>lock_open</v-icon>
                </v-btn>
                <v-btn icon @click.stop="handleLogout" slot="logoutBtn">
                    <v-icon>lock</v-icon>
                </v-btn>
            </AuthDialog>
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
        <v-navigation-drawer v-model="right" right temporary fixed></v-navigation-drawer>
    </div>
</template>

<script>
    import AuthDialog from '@/components/AuthDialog.vue'
    import {
        mapMutations
    } from 'vuex'
    import {
        auth
    } from '@/configs/firebase'
    import * as mutationTypes from '@/store/mutation-types'
    
    export default {
        components: {
            AuthDialog
        },
        data() {
            return {
                drawer: false,
                drawerRight: false,
                right: false,
                left: false
            }
        },
        methods: {
            ...mapMutations({
                showDialog: `auth/${mutationTypes.SHOW_AUTH_DIALOG}`
            }),
            handleLogout() {
                auth.signOut().then(function() {
                    console.log('Signed Out');
                }, function(error) {
                    console.error('Sign Out Error', error);
                });
            }
        },
    }
</script>
