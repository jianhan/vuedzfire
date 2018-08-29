<template>
    <div class="text-xs-center">
        <v-btn icon @click.stop="showDialog" slot="loginBtn" v-show="!isUserLoggedIn">
            Login
        </v-btn>
        <v-btn icon @click.stop="handleLogout" slot="logoutBtn" v-show="isUserLoggedIn">
            Logout
        </v-btn>
        <v-dialog v-model="canShowDialog" persistent max-width="360">
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                    Authentication
                </v-card-title>
                <v-card-text>
                    <div id="firebaseui-auth-container"></div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" flat="flat" @click="hideDialog">
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import firebase from 'firebase'
    import firebaseui from 'firebaseui'
    import VDialog from 'vuetify/es5/components/VDialog'
    import * as VCard from 'vuetify/es5/components/VCard'
    import {
        firebaseUILoginConfigs
    } from '../configs/firebase'
    import Vue from 'vue'
    import {
        mapMutations,
        mapState,
        mapGetters
    } from 'vuex'
    import {
        auth
    } from '@/configs/firebase'
    import * as mutationTypes from '@/store/mutation-types'
    
    export default {
        components: {
            VDialog,
            ...VCard,
        },
        computed: {
            ...mapState({
                canShowDialog: state => state.auth.showAuthDialog,
            }),
            ...mapGetters({
                isUserLoggedIn: 'auth/isUserLoggedIn'
            })
        },
        methods: {
            ...mapMutations({
                showDialog: `auth/${mutationTypes.SHOW_AUTH_DIALOG}`,
                hideDialog: `auth/${mutationTypes.HIDE_AUTH_DIALOG}`,
            }),
            showDialog() {
                this.$store.commit(`auth/${mutationTypes.SHOW_AUTH_DIALOG}`)
            },
            handleLogout() {
                auth.signOut().then(() => {
                    this.$router.push('/')
                }, function(error) {
                    console.error('Sign Out Error', error)
                })
            }
        },
        mounted() {
            (new firebaseui.auth.AuthUI(firebase.auth())).start('#firebaseui-auth-container', firebaseUILoginConfigs);
        },
    };
</script>
