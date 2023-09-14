<script>
    
export default {
    props: {
        postItemDataProps: {
            type: Object,
            required:true,
        }
    }
}
</script>

<template>
        <div class="col-4">
            <div class="block">
                <div class="post" >
                    {{ postItemDataProps.id }}
                    <div class="title">{{ postItemDataProps.title }}</div>
                    <div class="body">{{ postItemDataProps.body }}</div>
                </div>
            </div> 
        </div>
</template>
