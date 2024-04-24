/// <reference types="vite/client" />
/* 在这个声明文件中，我们使用了 declare module '*.vue' 来声明一个模块，该模块可以匹配任何以 .vue 结尾的文件。然后，我们使用了 import { DefineComponent } from "vue" 来导入 Vue 的 DefineComponent 类型。
接下来，我们定义了一个常量 component，其类型是 DefineComponent<{}, {}, any>。DefineComponent 是 Vue 3 中的一个泛型类，接受三个类型参数，分别表示 Props、Emits 和 Slots 的类型。在这个声明中，我们将 Props 和 Emits 类型设置为空对象 {}，而 Slots 类型设置为 any，表示不特定的类型。然后，我们将这个 component 导出为默认导出。
 */
declare module '*.vue' {
    import { DefineComponent } from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
}