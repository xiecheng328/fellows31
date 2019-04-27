<template>
    <div class="footer">
        <ul class="footer-list">
            <li>
                <router-link to="">电影</router-link>
            </li>
            <li>
                <router-link to="">电影</router-link>
            </li>
            <li>
                <router-link to="">电影</router-link>
            </li>
            <li>
                <router-link to="">电影</router-link>
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

</style>