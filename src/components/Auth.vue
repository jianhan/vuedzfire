<template>
    <div class="text-xs-center">
        <v-btn color="primary" dark @click.stop="showDialog = true">
            Open Dialog
        </v-btn>
        <v-dialog v-model="showDialog" max-width="290">
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                    Authentication
                </v-card-title>
                <v-card-text>
                    <div id="firebaseui-auth-container"></div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" flat="flat" @click="showDialog = false">
                        Disagree
                    </v-btn>
                    <v-btn color="green darken-1" flat="flat" @click="showDialog= false">
                        Agree
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import firebase from 'firebase';
    import firebaseui from 'firebaseui';
    import VDialog from 'vuetify/es5/components/VDialog';
    import * as VCard from 'vuetify/es5/components/VCard';
    import {
        firebaseUILoginConfigs
    } from '../configs/firebase';
    
    export default {
        data() {
            return {
                showDialog: false,
            };
        },
        components: {
            VDialog,
            ...VCard,
        },
        mounted() {
            const ui = (new firebaseui.auth.AuthUI(firebase.auth()));
            ui.start('#firebaseui-auth-container', firebaseUILoginConfigs);
        },
    };
</script>
