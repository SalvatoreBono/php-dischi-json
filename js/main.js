"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
            disks: [],
        };
    },
    methods: {

    },
    mounted() {
        axios.get("api/disks.php").then((response) => {
            this.disks = response.data;
        })
    }
}).mount('#app');