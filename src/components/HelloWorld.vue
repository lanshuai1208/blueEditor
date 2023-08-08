<template>
  <div>
    <div class="hello"></div>
    {{ value }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/composition-api";
// import { createEditor } from "@/core/index";
import { createEditor } from "@/core";
import { IEditor } from "@/core/types/editor";

export default defineComponent({
  setup() {
    const config = {
      selector: ".hello",
    };
    const editor = ref<IEditor | null>(null);

    const value = ref("nihao");

    function handleInput(val: string) {
      value.value = val;
    }
    onMounted(() => {
      editor.value = createEditor({
        selector: ".hello",
        value: value.value,
        inputDebounceDelay: 500,
        onUpdate: handleInput,
        onCreated: () => {
          console.log("haha");
        },
      });
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
