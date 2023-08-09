<template>
  <div>
    <div class="toolbar"></div>
    <div class="editor"></div>
    {{ value }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/composition-api";
// import { createEditor } from "@/core/index";
import { createEditor, createToolBar } from "@/core";
import { IEditor } from "@/core/types/editor";
import { IToolbar } from "@/core/types/toolbar";

export default defineComponent({
  setup() {
    const config = {
      selector: ".hello",
    };
    // const toolbar = ref<IToolbar | null>(null);
    const editor = ref<IEditor | null>(null);

    const value = ref("nihao");

    function handleInput(val: string) {
      value.value = val;
    }
    onMounted(() => {
      editor.value = createEditor({
        selector: ".editor",
        value: value.value,
        inputDebounceDelay: 500,
        onUpdate: handleInput,
        onCreated: () => {
          console.log("haha");
        },
      });
      // toolbar.value = createToolBar({
      //   selector: ".toolbar",
      //   editor: editor.value,
      // });
    });
    return {
      value,
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
