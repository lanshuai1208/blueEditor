<template>
  <div class="hello"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/composition-api";
import { createEditor } from "@/core/index";
import { Editor } from "@/core/editor";

export default defineComponent({
  setup() {
    const config = {
      selector: ".hello",
    };
    const editor = ref<Editor | null>(null);
    onMounted(() => {
      editor.value = createEditor({
        selector: ".hello",
      });
    });
    return {
      config,
      editor,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 400px;
  height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.84);
}
</style>
