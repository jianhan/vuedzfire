<template>
    <v-dialog v-model="isLoading" persistent width="300" transition="dialog-bottom-transition">
        <v-card color="primary" class="orange lighten-4">
            <v-card-text>
                Please stand by
                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
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
            })
        }
    }
</script>
