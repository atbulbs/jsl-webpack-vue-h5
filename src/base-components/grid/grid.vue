<template>
  <div class="grid-root">
    <div
      class="row"
      v-for="(rowItem, rowIndex) in row"
      :key="rowIndex + 'grid-row'"
    >
      <grid-item
        v-for="(columnItem, columnIndex) in column"
        :key="columnIndex + 'grid-column'"
        :data="data[(rowIndex * column + columnIndex)]"
      />
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
import GridItem from '../grid-item/grid-item'
export default {
  props: {
    data: {
      type: Array
    },
    row: {
      type: Number,
      default: 2
    },
    column: {
      type: Number,
      default: 5
    }
  },
  components: {
    GridItem
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">

.grid-root
  width 375px
  display flex
  justify-content space-between
  flex-direction column
  >.row
    display flex
    justify-content space-between
</style>
