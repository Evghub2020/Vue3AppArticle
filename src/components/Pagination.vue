<template>
  <div class="page-wrapper">
    <div class="wrap-btn">
      <button @click="previousPage"
              :class="{'pag-btn__active': currentPage !== 1 }"
      >
        <img src="../img/left.png" alt="left">
      </button>
    </div>
    <div class="page"
         v-for="pageNumber in paginationData.countDisplayPage"
         :key="pageNumber"
         :class="{'currentPage': currentPage === pageNumber + additivePages}"
         @click="changePage(pageNumber + additivePages)"
    >
      <span>{{ pageNumber + additivePages }}</span>
    </div>
    <div class="wrap-btn">
      <button
          @click="nextPage"
          :class="{'pag-btn__active': currentPage !== Math.ceil(countPosts / paginationData.limit) }"
      >
        <img src="../img/rigth.png" alt="rigth">
      </button>

    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",

    data() {
      return {
        additivePages: 0
      }
    },

  props:{
    currentPage:{
      type:Number,
      required: true
    },

    countPosts:{
      type: Number,
      required: true,
    },

    paginationData: {
      type: Object,
      required: true
    }
  },

  methods:{

    changePage(pageNumber){
      this.$emit('changePageEvent', pageNumber)
    },

    previousPage() {
      let prevPage = this.currentPage - 1
      if (prevPage >= 1) {

        if (prevPage > this.paginationData.countDisplayPage) {
          this.additivePages = prevPage - this.paginationData.countDisplayPage
        } else {
          this.additivePages = 0
        }

        this.changePage(prevPage)
      }
    },

    nextPage() {
      let nextPage = this.currentPage + 1
      let totalPage = Math.ceil(this.countPosts / this.paginationData.limit)

      if (nextPage <= totalPage) {
        if (nextPage > this.paginationData.countDisplayPage) {
          this.additivePages = nextPage - this.paginationData.countDisplayPage
        } else {
          this.additivePages = 0
        }
        this.changePage(nextPage)
      }
    }
  }
}
</script>

<style scoped>

  .page-wrapper{
    display: flex;
    margin-top: 15px;
  }
  .page{
    border: 1px solid black;
    padding: 10px;
  }

  .page{
    margin-right: 10px;
    font-weight: 400;
    padding: 5px 0px 5px 0px;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    text-align: center;
    border: none;
    width: 30px;
    height: 35px;
    border-radius: 5px;
    background-color: #B0B4FF;
  }
  .currentPage {
    font-weight: 700;
    background-color: #FFFFFF;
  }
  .pag-btn__active{
    background-color: #cccdef;
  }
</style>