<template>
 <div>
   it is list page, id : {{id}}, metaData : {{metaData}}
 </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data () {
     return {
       id: '',
       metaData: ''
     }
   },
   mounted () {
     this.id = this.$route.params.id
     this.metaData = this.$router.currentRoute.meta.metaData
   },
   components: {

   }
 }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">


</style>
