<template>
  <header class="header">
    <slot name="left"></slot>   
    <span>{{title}}</span>
  </header>
</template>

<script>
export default {
    props: {
        title: String
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header {
  position: relative;
  height: 0.72rem;
  background: -webkit-linear-gradient(90deg, #4388f0, #626ee4); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(90deg, #4388f0, #626ee4); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(90deg, #4388f0, #626ee4); /* Firefox 3.6 - 15 */
  background: linear-gradient(90deg, #4388f0, #626ee4); /* 标准的语法（必须放在最后） */

  span {
    position: absolute;
    left: 2.85rem;
    top: 0.21rem;
    font-size: 0.32rem;
    color: white;
    text-align: center;
  }
}
</style>
