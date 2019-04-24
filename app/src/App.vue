<template>
    <div>
        
        <div id="app">
            <router-link to="/a">a页面</router-link>   
            <!-- <router-link to="/b">b页面</router-link>    -->
            <router-link :to="{name:'b',params:{name:'zs',id:111}}">b页面</router-link>   
            <router-link to="/c/666">c页面</router-link>
        </div>
        <router-view/>
        
    </div>
</template>

<style>
</style>
