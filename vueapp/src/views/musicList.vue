<template>
    <div>
        音乐列表
        <aplayer :music="{
    title: 'secret base~君がくれたもの~',
    artist: 'Silent Siren',
    src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
    pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
  }" :list="musicData"/>
    </div>
</template>

<script>
    import axios from 'axios'
    import Aplayer from 'vue-aplayer'
    export default {
        data(){
            return {
                musicData:[]
            }
        },
       components: {
           Aplayer
       },
       created() {
           axios.get('/data/musicdata.json')
           .then((result)=>{
               result.data.musicData.forEach((obj)=>{
                   let obj1 = {
                       title:obj.title,
                       author:obj.author,
                       src:obj.src,
                       pic:obj.musicImgSrc,
                       lrc:obj.lrc
                   }
                   this.musicData.push(obj1);
               })

            //    {
            //         "title": "我要你",
            //         "author": "老狼",
            //         "src": "http://up.mcyt.net/down/43422.mp3",
            //         "musicImgSrc": "http://omratag7g.bkt.clouddn.com/%E6%88%91%E8%A6%81%E4%BD%A0.jpg",
            //         "lrc": "lrc/我要你.lrc"
            //     }
            //     {
            //         "title": "我要你",
            //         "author": "老狼",
            //         "src": "http://up.mcyt.net/down/43422.mp3",
            //         "pic": "http://omratag7g.bkt.clouddn.com/%E6%88%91%E8%A6%81%E4%BD%A0.jpg",
            //         "lrc": "lrc/我要你.lrc"
            //     }
           })
       },
    }
</script>

<style scoped>
    img{
       width:50%; 
    }

</style>