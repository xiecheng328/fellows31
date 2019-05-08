<template>
    <div>
        <img :src="obj.bg" v-for="(obj,index) in musicList" :key="index"/>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                musicList:[]
            }
        },
        created() {
            axios.get('/data/musiclist.json')
            .then((result)=>{
                this.musicList = result.data.albums;
            })
        },
    }
</script>

<style scoped>
    img{
       width:50%; 
    }

</style>