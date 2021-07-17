<template>
  <div id="home">
    <div v-for="(item,index) in data" :key="index" style="height:30vh;">{{item}}</div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      data:[1,2,3,4,5,6,7,8,9]
    };
  },
  components:{
  },
  methods: {
    goPush() {
      this.$router.push({ path: "details" });
    },
  },
};
</script>
<style lang="scss" scoped>
#home {
  
}
</style>