<template>
 <div>
   it is home page
   <div @click="handleClick">
     to list page
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data () {
     return {

     }
   },
   methods: {
     handleClick () {
       this.$router.push({
         name: 'list',
         params: {
           id: 9527
         }
       })
     }
   },
   components: {

   }
 }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">


</style>
