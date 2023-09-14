<script>
    import PostItem from "./PostItem.vue";

    export default {
        
    components: {
        PostItem
    },

    props: {
        displayedPostsProps: {
            type:Array,
            required:true
        }
    },
}
</script>

<template>
    <div class="col-12">
      <div class="section-post"><h1>Статьи</h1></div>
    </div>
    <div class="content">
            <post-item 
                v-for="post in displayedPostsProps"
                v-bind:postItemDataProps="post"
            />
    </div>
</template>
