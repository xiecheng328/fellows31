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
        <router-view/>
        
    </div>
</template>

<style>
</style>
