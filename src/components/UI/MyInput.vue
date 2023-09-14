
<template>
      <input :value="modelValue" @input="updateInput" class="input" type="text">
  </template>
  
  <script>
  export default {
    name: 'my-input',
    props: {
        modelValue:[String, Number]
    },
    methods:{
        updateInput(event){
            this.$emit('update:modelValue', event.target.value)
        },
    }
  }
  </script>
  
<style scoped>
.input{
    border-radius: 5px;
    border: 1px;
    border-color: #FFFFFF;
    width: 350px;
    height: 70px;
}

input{
    font-size: 18px;
    line-height: 27px;
    padding-left: 15px;
}

input:focus{
    outline: none;
    box-shadow: 0 0 0 3px rgb(189, 220, 240);
}
</style>