<template>
 <div>
   it is home page
   <div @click="handleClick">
     <button>to list page</button>
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

   },
   beforeRouteLeave (to, from, next) {
     console.log('home to', to)
     console.log('home from', from)
     const answer = window.confirm('请保存更改再离开主页')
     if (answer) {
       next()
     } else {
       next(false)
     }
   }
 }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">


</style>
