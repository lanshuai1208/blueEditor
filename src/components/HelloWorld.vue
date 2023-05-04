<template>
  <div class="hello">测试内容</div>
</template>

<script lang="ts">
// import { defineComponent, onMounted, ref } from '@vue/composition-api'
import { defineComponent } from '@vue/composition-api'
// import { createEditor } from '@/core/index'
// import { Editor } from '@/core/editor'

export default defineComponent({
  setup() {
    const config = {
      selector: '.hello'
    }

    // const editor = ref<Editor | null>(null)

    // onMounted(() => {
    //   editor.value = createEditor({
    //     selector: '.hello'
    //   })
    // })

    return {
      // editor,
      config
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 600px;
  height: 400px;
  border: 1px solid blue;
}
</style>
