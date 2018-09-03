<template>
    <v-dialog v-model="isLoading" hide-overlay persistent width="300">
        <v-card color="primary" dark>
            <v-card-text>
                {{ isLoading }} Please stand by
                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                {{ test }}
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    import VDialog from 'vuetify/es5/components/VDialog'
    import VProgressLinear from 'vuetify/es5/components/VProgressLinear'
    import * as VCard from 'vuetify/es5/components/VCard'
    
    export default {
        components: {
            VDialog,
            VProgressLinear,
            ...VCard
        },
        computed: {
            ...mapState({
                isLoading: state => state.auth.isLoading,
            }),
            test() {
                return this.$store.state.auth
            }
        }
    }
</script>
