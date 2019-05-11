<template>
    <div>

        <!-- <img :src="url"/> -->
        <!-- {{$route.params.index}} -->

        <div class="img-box" :style="{backgroundImage:'url('+url+')'}">
        </div>
    </div>
</template>

<script>

    export default {

        computed: {
            url(){
                // http://localhost:8080/img/photo/1.jpg
                return this.$store.state.photoData[this.$route.params.index].src
            }
        },
    }
</script>

<style scoped>
    .img-box{
        position: absolute;
        left:0px;
        top:1rem;
        bottom:1rem;
        right:0px;
        background: #000 0 center no-repeat;
        background-size: contain;

    }
</style>