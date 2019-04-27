<template>
    <div class="footer">
        <ul class="footer-list">
            <li>
                <router-link to="/movie">电影</router-link>
            </li>
            <li>
                <router-link to="/music">音乐</router-link>
            </li>
            <li>
                <router-link to="/book">图书</router-link>
            </li>
            <li>
                <router-link to="/photo">图片</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .footer{
        position: fixed;
        bottom:0px;
        height: 1rem;
        line-height: 1rem;
        background: #ff0000;
        width: 100%;
    }
    .footer-list{
        display: flex
    }
    .footer-list li{
        flex: 1;
        text-align: center;
    }
    .footer-list a{
        color:#000;
        outline: none;
    }
    .footer-list a.router-link-active{
        color:#fff;
    }

</style>