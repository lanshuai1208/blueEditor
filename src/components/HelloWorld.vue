<template>
  <div>
    <div class="toolbar"></div>
    <div class="editor"></div>
    {{ value }}
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  onBeforeUnmount,
} from "@vue/composition-api";
import { createEditor, createToolBar } from "@/core";
import { IEditor } from "@/core/types/editor";
import { IToolbar } from "@/core/types/toolbar";

export default defineComponent({
  setup() {
    function handleInput(val: string) {
      value.value = val;
    }
    const config = {
      selector: ".hello",
    };
    const toolbar = ref<IToolbar | null>(null);

    const editor = ref<IEditor | null>(null);

    const value = ref(`nihao`);

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
      toolbar.value = createToolBar({
        selector: ".toolbar",
        editor: editor.value,
      });
    });

    onBeforeUnmount(() => {
      toolbar.value?.destroy();
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
