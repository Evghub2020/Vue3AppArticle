<script>

export default {

  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      if (this.post.title.length === 0 || this.post.body.length === 0 ) {
        this.$emit('showDialogEvent', true)
      }
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  },
}

</script>

<template>
    <div class="row">
        <div class="col-12">
            <form @submit.prevent>
                <div class="function-area">
                    <div class="col-4">
                        <my-input type="text" v-model="post.title" placeholder="Введите Название статьи"/>
                    </div>
                    <div class="col-4">
                        <my-input  type="text" v-model="post.body" placeholder="Введите Основной текст"/>
                    </div>
                    <div class="col-4">
                        <my-button @click="createPost">Добавить новую статью</my-button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
