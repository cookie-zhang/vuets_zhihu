<template>
    <h1>asdas
        <pre>asd</pre>
    </h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
    setup() {
        const route = useRoute()
        return {
            route
        }
    }
})
</script>