<template>
  <div class="dialog" v-if="show">
    <div class="dialog__content ">
      <div class="row">
        <div class="col-12">
          <span class="dialog-title">Заполните необходимые поля.</span>
        </div>
        <div class="col-12">
          <div class="dialog-button">
            <button @click="hideDialog">
            Ок
          </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    hideDialog() {
      this.$emit('hideDialogEvent', true)
    }
  }
}
</script>

<style scoped>
  .dialog{
    top: 0;
    bottom: 0;
    right:0;
    left: 0;
    background: rgba(0,0,0, 0.5);
    position: fixed;
    display: flex;
  }
  .dialog__content{
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    margin: auto;
    background: white;
    border-radius: 10px;
    min-height: 50px;
    min-width: 300px;
    padding: 20px;
  }
  .dialog-button{
    margin-top: 10px;
  }
  .dialog-button button {
    font-family: 'Montserrat', sans-serif;
    width: 80px;
    height: 30px;
    margin: 0 auto;
    border: none;
    border-radius: 5px;
    background: #B0B4FF;
    font-size: 12px;
  }
</style>