<template>
    <div>
        count
        <!-- {{$store.state.count}} -->
        {{count}}
        {{msg}}
        ------
        {{num}}
        ---
        {{xx}}
        <button @click="add(8)">+++</button>
        <!-- <button @click="$store.commit('reduce',2)">---</button> -->
        <button @click="reduce(2)">---</button>
         <button @click="addAction(66)">异步</button>
    </div>
</template>


<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    export default {
        data:function(){
            return {

            }
        },
        // computed: {
        //     count(){
        //         return this.$store.state.count;
        //     }
        // },
        computed: {
            ...mapState(['count','msg']),
            ...mapGetters(['num','xx'])
        },
        methods: {
            show(){ 
                console.log(this.$store.state.count)
            },
            fn(num){
                this.$store.commit('add',num);
            },
            ...mapMutations(['add','reduce']),
            ...mapActions(['addAction'])
        }
    }
</script>

<style lang="scss" scoped>

</style>