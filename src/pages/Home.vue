<template>
    <div id="home">
        <button @click="goPush">点击</button>
    </div>
</template>
<script>
export default {
    name:'home',
    data(){
        return{

        }
    },
    methods:{
        goPush(){
            this.$router.push({path:'details'})
        }
    }
}
</script>
<style lang="scss" scoped>

</style>