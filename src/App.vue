<template>
    <div class="app">
        <img class="background" src="./img/bgRinh.png" alt="">
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="logo">
                            <img src="./img/logo.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </header>
        
        <div class="container">
            <modal-window
                v-model:show="dialogVisible"
                @hideDialogEvent="hideDialog"></modal-window>
            <post-form
                v-model:show="dialogVisible"
                @create="createPost"
            />
            <post-list
                :displayedPostsProps="displayedPostsData"
            />
            <Pagination
                v-model:count-posts="countPosts"
                v-model:current-page="currentPage"
                v-model:pagination-data="paginationData"
                @changePageEvent="updateDisplayedPosts"
            />
        </div>
    </div>
</template>

<script>

import PostList from "./components/PostList.vue";
import PostForm from "./components/PostForm.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import Pagination from "@/components/Pagination.vue";
import axios from 'axios';


export default {
    data() {
        return {
            postsData: [],
            displayedPostsData: [],
            dialogVisible: false,
            currentPage: 1, //смотрит App
            countPosts: 20, //смотрит Pagination
            paginationData: {
              countDisplayPage: 4,
              limit: 6,
            }
        }
    },

    components: {
        PostForm, 
        PostList,
        ModalWindow,
        Pagination,
    },

    methods: {

        hideDialog() {
          this.dialogVisible = false
        },

        checkingFormComplete(post) {
          return post.title.length === 0 || post.body.length === 0;
        },

        createPost(post) {
            if (this.checkingFormComplete(post)) {
              this.dialogVisible = true
              return
            }
            this.postsData.unshift(post);
            this.countPosts = this.postsData.length
            this.updateDisplayedPosts(this.currentPage)
        },

        updateDisplayedPosts(page){
            this.currentPage = page;
            console.log(this.currentPage)
            this.displayedPostsData = this.postsData.slice((page-1)*this.paginationData.limit, page*this.paginationData.limit);
        },

        async initializingPosts() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts',
                {
                    params: {
                        _page: 1,
                        _limit:this.countPosts
                    }
                })
                this.postsData = response.data
                this.updateDisplayedPosts(1)
            } catch (e){
                alert(e)
            }
        },
    },

    mounted() {
        this.initializingPosts();
    },
}

</script>

<style>
    .wrap-btn button{
        padding: 5px 0px 5px 0px;
        margin-right: 10px;
        text-align: center;
        border: none;
        width: 30px;
        height: 35px;
        border-radius: 5px;
        background-color: #B0B4FF;
    }
</style>