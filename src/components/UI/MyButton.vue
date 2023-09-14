<template>
    <button class="btn">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'my-button'
  }
  </script>
  
<style scoped>
    .btn{
    width: 350px;
    height: 70px;
    font-size: 20px;
    line-height: 30px;
    background-color: #5B98E3;
    color: #FFFFFF;
    font-weight: 700;
  }
</style>