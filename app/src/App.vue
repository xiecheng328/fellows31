<template>
    <div>
        
        <div id="app">
            <router-link to="/home">首页</router-link>   
            <router-link to="/a">a页面</router-link>   
            <!-- <router-link to="/b">b页面</router-link>    -->
            <router-link :to="{name:'b',params:{name:'zs',id:111}}">b页面</router-link>   
            <router-link to="/c/666">c页面</router-link>
            <router-link to="/b/888">b页面重定向到c</router-link>
            <router-link to="/yyy">别名</router-link>
        </div>
        <transition name="fade">
            <router-view/>
        </transition>

         <button @click="goPrev()">&lt;</button>
         <button @click="goNext()">&gt;</button>
         <button @click="goHome()">home</button>
    </div>
</template>
<script>
    export default {
        methods: {
            goPrev(){
                this.$router.go(-1);
            },
            goNext(){
                this.$router.go(1);
            },
            goHome(){
                this.$router.push('/');
            }
        }
        
    }
</script>

<style>
    .fade-enter{
        /* opacity: 0; */
        transform: translateX(-100%)
    }
    .fade-enter-active{
        transition:transform 1s;
    }
    .fade-enter-to{
        transform: translateX(0)
    }
    .fade-leave{
       transform: translateX(0)
    }
    .fade-leave-active{
        transition:transform 1s;
    }
    .fade-leave-to{
        transform: translateX(100%)
    }


</style>
