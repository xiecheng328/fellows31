<template>
    <div>
        <h1>B页面</h1>

        {{$route.params.name}}
        -----
        {{$route.params.id}}
    </div>
</template>

<script>
    export default {
        data:function () {
            return {
                msg:'xxx'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>