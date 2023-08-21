# blue-editor

一款L1级富文本编辑器

# 使用方法

以vue为例：

1. main.ts
   
   引入样式文件
   ```typescript
    // .....
    import "./core/style/index.scss";


    new Vue({
    render: (h) => h(App),
    }).$mount("#app");

   ```
2. 组件内调用功能
   ```vue
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
    import { createEditor, createToolBar } from "@/core"; // 引入创建工厂函数
    import { IEditor } from "@/core/types/editor"; // 引入编辑器类型
    import { IToolbar } from "@/core/types/toolbar"; // 引入头部工具栏类型

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
        editor.value = createEditor({ // 通过工厂函数创建编辑器实例
            selector: ".editor", // 容器DOM选择器
            value: value.value, // 入参，初始值
            inputDebounceDelay: 500, // 防抖，毫秒
            onUpdate: handleInput, // 生命周期钩子，内容变化，将编辑后的内容通过参数带出来
            onCreated: () => { // 生命周期钩子，创建时执行
            console.log("haha");
            },
        });
        toolbar.value = createToolBar({ // 创建头部工具栏实例
            selector: ".toolbar", // 容器DOM选择器
            editor: editor.value, // 刚才创建的编辑器实例，用于调用其功能
        });
        });

        onBeforeUnmount(() => {
        toolbar.value?.destroy(); // 销毁工具栏实例
        editor.value?.destroy(); // 销毁编辑器实例
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

   ```

