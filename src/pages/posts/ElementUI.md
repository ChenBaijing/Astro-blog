---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'ElementUI'
pubDate: 2023-03-15
description: 'ElementUI'
author: 'Chen'
tags: ["frontend"]
category: "前端开发"
---
# ElementUI

[TOC]



## 图标

直接通过设置类名为 `el-icon-iconName` 来使用即可，例如我们设置一个删除图标，通过 `<i>` 标签的 `class` 属性引入对应图标的类名就可以了。

## 按钮

el-button属性

Element UI 给我们提供了 [Button 按钮](https://element.eleme.io/#/zh-CN/component/button)组件，通过使用 `<el-button>` 组件来设置按钮，并提供了 `type`、`plain`、`round`、`circle` 四个属性来定义 Button 的样式，详情如下表所示：

| 属性   | 说明                                                         |
| ------ | ------------------------------------------------------------ |
| type   | type 属性用来设置按钮的类型，不同类型的按钮，会呈现不一样的颜色，它有 5 个属性值，分别是 `primary`（蓝色）、`success`（绿色）、`info`（灰色）、`warning`（橙色）、`danger`（红色）。 |
| plain  | plain 属性用来设置朴素按钮，按钮颜色会比默认按钮的颜色浅一点。 |
| round  | round 属性用来设置圆角按钮。                                 |
| circle | circle 属性用来设置圆形按钮，一般用于 Icon 图标按钮。        |

```vue
<!--默认按钮-->
<el-button type="primary/success/info/warning/danger"></el-button>
<!--朴素按钮-->
<el-button plain></el-button>
<!--圆角按钮-->
<el-button round></el-button>
<!--圆形按钮-->
<el-button circle></el-button>
```

`type` 属性除了上述四种属性值外，它还有一个 `text` 属性值，可以用来设置没有边框和背景颜色的按钮。

其使用格式如下所示：

```html
<el-button type="text"></el-button>
```

## 按钮组

在 Element UI 中为我们提供了 `<el-button-group>` 标签来嵌套你的按钮，使其成为一组。

其使用格式如下所示：

```html
<el-button-group>
  <el-button></el-button>
</el-button-group>
```

### 不同尺寸的按钮

Element UI 为我们提供了 `size` 属性来设置按钮的大小，它有三个属性值，详情如下表所示：

| 属性值 | 说明       |
| ------ | ---------- |
| mini   | 超小按钮。 |
| small  | 小型按钮。 |
| medium | 中等按钮。 |

## 链接

Link 文字链接相当于是渲染好的 `<a>` 标签。

在 Element UI 中为我们提供了 `<el-link>` 组件来表示文字链接，它所拥有的属性和 `<a>` 标签一样。

其使用格式如下所示：

```html
<el-link href="链接 URL" target="_blank/_self/_parent/_top"></el-link>
```

`target` 属性取值，详情如下表所示：

| 属性值  | 说明                         |
| ------- | ---------------------------- |
| _blank  | 在新窗口打开被链接文档。     |
| _self   | 在相同的框架中打开链接文档。 |
| _parent | 在父框架集中打开被链接文档。 |
| _top    | 在整个窗口中打开被链接文档。 |

在按钮中所讲到的 `type` 属性同样可以用在 `<el-link>` 组件中，用来表示不同状态下的链接。

## 表单组件

### Radio 单选框`<el-radio>`

-   注意：在使用单选按钮时，`label` 属性和 `v-model` 属性是必不可少的。

-   | 参数          | 说明                                 | 类型                  | 可选值            | 默认值 |
    | ------------- | ------------------------------------ | --------------------- | ----------------- | ------ |
    | value/v-model | 绑定值                               | string/number/boolean | 无                | 无     |
    | label         | Radio 的 value                       | string/number/boolean | 无                | 无     |
    | disabled      | 是否禁用                             | boolean               | 无                | false  |
    | border        | 是否显示边框                         | boolean               | 无                | false  |
    | size          | Radio 的尺寸，仅在 border 为真时有效 | string                | medium/small/mini | 无     |
    | name          | 原生 name 属性                       | string                | 无                | 无     |

```html
<div>
    <el-radio v-model="radio" label="男">男</el-radio>
    <el-radio v-model="radio" label="女">女</el-radio>
</div>
```

radio存在一个 `change` 事件，是当指定值发生变化时触发的事件

```vue
<el-radio v-model="AA" label="AA" @change="func" ></el-radio>
```

#### 单选框组

结合 `el-radio-group` 元素和子元素 `el-radio` 可以实现单选框组。只需要在 `el-radio-group` 中绑定 `v-model`，在 `el-radio` 中设置好 `label` 即可 ，无需再给每一个 `el-radio` 绑定变量。

`el-radio-group` 的意义在于：只需给 `el-radio-group` 添加 `v-model` 指令代替给内部所有 `el-radio` 都添加的操作。

### Checkbox 多选框

Element UI 提供了 `<el-checkbox>` 来实现多选框。

#### 多选框组

Element UI 提供了 `el-checkbox-group` 元素能把多个 Checkbox 管理为一组，只需要在 Group 中使用 `v-model` 绑定 `Array` 类型的变量，并给每个 `<el-checkbox>` 子元素设置 `label` 属性值即可。

#### 限制勾选的数量

在 Checkbox 组件中提供了 `min` 和 `max` 属性来限制勾选的数量，`min` 属性用于设置最小勾选数量，`max` 属性用于设置最大勾选数量。

#### indeterminate 状态

`indeterminate` 属性用于表示 checkbox 的不确定状态，一般用于实现全选的效果。

### Input 输入框

Element UI 提供了 `<el-input>` 用于创建鼠标或者键盘输入字符的输入框

Input 组件提供了 `show-password` 属性用于设置一个可以切换显示隐藏的密码框。

我们还可以给输入框中输入的字符设置输入最大和最小长度，并且加上 Icon 图标，相关属性如下表所示：

| 属性        | 说明                   | 类型   | 可选值 | 默认值 |
| ----------- | ---------------------- | ------ | ------ | ------ |
| maxlength   | 原生属性，最大输入长度 | number | 无     | 无     |
| minlength   | 原生属性，最小输入长度 | number | 无     | 无     |
| prefix-icon | 输入框头部图标         | string | 无     | 无     |
| suffix-icon | 输入框尾部图标         | string | 无     | 无     |

Input 组件提供了 `type="textarea"` 属性可用来指定该输入框为文本域。

### Select 选择器

我们为 `<el-select>` 添加 `multiple` 属性即可启用多选，此时 `v-model` 的值为当前选中值所组成的`Array`。默认情况下选中值会以 Tag 的形式展现。

我们还可以使用 `collapse-tags` 属性将它们合并为一段文字。

```vue
<template>
  <el-select v-model="value" placeholder="水果分类" multiple collapse-tags>
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>
<script>
  export default {
    data() {
      return {
        options: [
  			// data here...
        ],
        value: "",
      };
    },
  };
</script>
<style></style>
```



### Switch 开关

Element UI 提供了 `<el-switch>` 来实现 [Switch 开关](https://element.eleme.io/#/zh-CN/component/switch)，它表示两种相互对立的状态间的切换

在 `<el-switch>` 上使用 `v-mode` 属性绑定了一个 `Boolean` 类型的变量，使用 `active-color` 属性和 `inactive-color` 属性来设置开关的背景色，开时为绿色，关时为红色。

#### 文字描述

添加 `active-text` 属性和 `inactive-text` 属性来设置开关的文字描述。

```vue
<template>
  <el-switch
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-text="开灯"
    inactive-text="关灯"
  >
  </el-switch>
</template>
<script>
  export default {
    data() {
      return {
        value: true,
      };
    },
  };
</script>
<style></style>
```



### DatePicker 日期选择器

在 Element UI 中提供了 `<el-date-picker>` 来实现日期选择器。

使用 `type=“date”` 属性指定日期以「日」为基本单位。

除了以「日」为基本单位，我们还可以以周（type="week"）、月（type="month"）、年（demonstration）为基本单位，其使用方法同上

```vue
<template>
  <el-date-picker v-model="value" type="date" placeholder="选择日期">
  </el-date-picker>
</template>
<script>
  export default {
    data() {
      return {
        value: "",
      };
    },
  };
</script>
<style></style>
```

**选择日期范围**

`type` 属性有个 `daterange` 属性值可以实现在一个选择器中选择一个时间范围。

使用 `range-separator` 属性设置日期间隔，使用 `start-placeholder` 属性设置开始日期，使用 `end-placeholder` 属性设置结束日期。

```vue
<template>
  <el-date-picker
    v-model="value"
    type="daterange"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
  >
  </el-date-picker>
</template>
<script>
  export default {
    data() {
      return {
        value: "",
      };
    },
  };
</script>
<style></style>
```

### Upload 上传

Element UI 为我们提供了 `<el-upload>` 来实现[上传](https://element.eleme.io/#/zh-CN/component/date-picker)。

必须要添加 action 属性，其属性值为上传的地址。

```vue
<template>
  <el-upload action="https://jsonplaceholder.typicode.com/posts/">
    上传
  </el-upload>
</template>
<script></script>
<style></style>
```

### Form 表单

在 [Form 组件](https://element.eleme.io/#/zh-CN/component/form)中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件。

```vue
<el-form>
  <el-form-item>
    <!--里面放表单组件-->
  </el-form-item>
  <el-form-item>
    <!--里面放表单组件-->
  </el-form-item>
  <el-form-item>
    <!--里面放表单组件-->
  </el-form-item>
  ...
</el-form>
```

## 表格组件

在 Element UI 中，提供了 `<el-table>` 和 `<el-table-colum>` 来创建表格，其中，`<el-table>` 代表表格，`<el-table-colum>` 代表表格的一列。

```vue
<el-table>
  <el-table-colum lable="列名"></el-table-colum>
  <el-table-colum lable="列名"></el-table-colum>
  <!--表格中有列，就包含几对 el-table-colum-->
</el-table>
```

数据添加用到 `<el-table>` 中的 `data` 属性和 `<el-table-colum>` 中的 `prop` 属性。

`data` 属性用于显示数据，它的属性值为 array 数组类型。

`prop` 属性的官方说明是“对应列内容的字段名，也可以使用 property 属性”，通俗来讲，`prop` 属性相当于给列去传递一个参数，也就是把对应的数据渲染在列上。

**表格美化**

`<el-table>` 组件中有如下表所示的一些属性可以用来美化我们的表格。

| 属性           | 说明                                                         | 类型                             | 可选值 | 默认值 |
| -------------- | ------------------------------------------------------------ | -------------------------------- | ------ | ------ |
| stripe         | 是否为斑马纹 table                                           | boolean                          | 无     | false  |
| border         | 是否带有纵向边框                                             | boolean                          | 无     | false  |
| row-class-name | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。 | Function({row, rowIndex})/String | 无     | 无     |

多选表格就是表格每一行的首部有个 Checkbox 多选框，可以勾选每一行的数据。

在表格中实现多选的方法很简单，手动添加一个 `<el-table-column>`，并且设置 `type` 属性的属性值为 `selection` 即可。

```vue
<template>
  <div>
    <el-table
      :data="tableData"
      style="width:35%"
      border
      :row-class-name="tableRowClassName"
      ref="multipleTable"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="100"> </el-table-column>
      <el-table-column prop="tel" label="电话" width="150"> </el-table-column>
      <el-table-column prop="address" label="地址" width="180">
      </el-table-column>
    </el-table>
    <el-button @click="toggleSelection([tableData[1], tableData[2]])"
      >切换第二、第三行</el-button
    >
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>
</template>

<script>
  export default {
    methods: {
      tableRowClassName({ row, rowIndex }) {
        console.log(row);
        console.log(rowIndex);
        // 偶数行着色
        if (rowIndex % 2 == 0) {
          return "row1";
        } else {
          return "row2";
        }
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach((row) => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
    },
    data() {
      return {
        tableData: [],
      };
    },
  };
</script>
<style>
  .el-table .row1 {
    background: #a2d2ff;
  }
  .el-table .row2 {
    background: #cdf2ca;
  }
</style>
```

其中 `toggleRowSelection` 方法用于多选表格，切换某一行的选中状态，`clearSelection` 方法用于多选表格，清空用户的状态。

**行列操作**

通过 `<el-table-column>` 去构建一个操作列，然后在操作里面通过插槽的方式放两个按钮即可。

```vue
<el-table-column label="操作">
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index,scope.row)"
          >编辑</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index,scope.row)"
          >删除</el-button
        >
      </template>
</el-table-column>
```

**表头搜索**

```vue
<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width:50%"
    border
    stripe
  > <!-- 修改过滤数据来源以达成搜索功能 -->
    <el-table-column prop="name" label="姓名" width="100"> </el-table-column>
    <el-table-column prop="tel" label="电话" width="150"> </el-table-column>
    <el-table-column prop="address" label="地址" width="180"> </el-table-column>
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
      </template>
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
      // 处理编辑操作的方法
      handleEdit(index) {
        console.log(index);
        console.log("编辑已触发");
      },
      // 处理删除操作的方法
      handleDelete(index) {
        console.log(index);
        console.log("删除已触发");
      },
    },
    data() {
      return {
        tableData: [],
        search: "",
      };
    },
  };
</script>
<style></style>
```

## 提示类组件

**Alert 警告**

-   `effect` 属性用于改变主题，就是背景颜色的透明度，它有两个属性值 `light` 和 `dark`，默认值为 `light`。
-   `closable` 属性用于是否允许关闭提示条，属性值为 `false`，表示不允许关闭。
-   `close-text` 属性是设置关闭按钮自定义文本。
-   `show-icon` 属性是用来设置对应 `type` 主题的 icon 图标。
-   `@close` 用来绑定关闭提示时触发的事件 `hello`。
-   `center` 属性用于设置文字居中显示。
-   `description` 属性用来设置辅助性文字。

```vue
<template>
  <div>
    <!--该提示不可以被关闭-->
    <el-alert
      title="信息发送成功啦～～"
      type="success"
      effect="light"
      :closable="false"
    >
    </el-alert>
    <!--关闭该提示时，发送提示消息“你要关闭我吗”-->
    <el-alert
      title="信息发送成功啦～～"
      type="success"
      effect="dark"
      close-text="你要关闭我吗"
      show-icon
    >
    </el-alert>
    <!--关闭提示时，回调 alert-->
    <el-alert
      title="这是一条来自宇宙岛的消息"
      type="info"
      @close="hello"
      show-icon
    >
    </el-alert>
    <!--文本居中-->
    <el-alert title="警告：请不要随意发送消息" type="warning" center show-icon>
    </el-alert>
    <!--带有 icon 和辅助性文字介绍-->
    <el-alert
      title="非法操作，发送失败"
      type="error"
      description="输入信息不能包含 ¥、$、@ 等字符"
      show-icon
    >
    </el-alert>
  </div>
</template>
<script>
  export default {
    methods: {
      hello() {
        alert("地球居民好!");
      },
    },
  };
</script>
<style>
  .el-alert {
    width: 30%;
    margin-top: 10px;
  }
</style>
```

**Loading 加载**

Element 提供了两种调用 [Loading](https://element.eleme.io/#/zh-CN/component/loading) 的方法：指令和服务。

对于自定义指令 `v-loading`，只需要绑定 `Boolean` 即可

```vue
<template>
  <el-table v-loading="loading"> ... </el-table>
</template>
<script>
  export default {
    data() {
      return {
        loading: "true",
      };
    },
  };
</script>
```

可以使用如下表所示的属性来自定义加载文案、图标和背景色，突出此状态为数据加载状态。

| 属性                       | 说明                           | 类型   |
| -------------------------- | ------------------------------ | ------ |
| element-loading-text       | 显示在加载图标下方的加载文案。 | string |
| element-loading-spinner    | 自定义加载图标类名。           | string |
| element-loading-background | 遮罩背景色。                   | string |

**Message 消息提示**

[Message 消息提示](https://element.eleme.io/#/zh-CN/component/message) 常用于主动操作后的反馈提示

```vue
<template>
  <div>
    <el-button @click="open">点击我，看一看消息提示</el-button>
    <el-button @click="openVn">VNode</el-button>
  </div>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$message("喵，嘻嘻，没什么事情！");
      },
      openVn() {
        const e = this.$createElement;
        this.$message({
          message: e("div", null, [
            e("span", null, "内容可以是 "),
            e("i", { style: "color: #7FC8A9" }, "VNode"),
          ]),
        });
      },
    },
  };
</script>
```

在上面代码中，给两个按钮绑定了点击事件，分别调用 `open` 和 `openVn` 两个方法，最终在这两个方法中使用 `this.$message` 方法弹出消息框，Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。

**MessageBox 弹框**

[MessageBox 弹框](https://element.eleme.io/#/zh-CN/component/message-box)是模拟系统的消息提示框而实现的一套模态对话组件，其主要用于消息提示、确认消息和提交内容。

-   当调用 `$alert` 方法即可打开普通消息提示。
-   当调用 `$confirm` 方法即可打开确认消息提示。
-   当调用 `$prompt` 方法即可打开提交内容消息提示。

```vue
<template>
  <el-button @click="open">点击我删除数据</el-button>
</template>
<script>
  export default {
    methods: {
      open() {
        this.$alert("您确定要删除该条数据吗？", "请注意", {
          confirmButtonText: "确定",
          callback: () => {
            this.$message({
              type: "info",
              message: `数据删除失败，请稍后再试！`,
            });
          },
        });
      },
    },
  };
</script>
```

调用 `$alert` 方法打开消息提示，它接收了两个参数 `message`（消息内容）和 `title`（消息标题），在 `$alert` 方法中 `confirmButtonText` 用于设置消息确认按钮的文本内容，`action` 是一个回调函数。

**Notification 通知**

[Notification 通知](https://element.eleme.io/#/zh-CN/component/notification) 就是悬浮出现在页面角落，显示全局的通知提醒消息

Notification 组件提供通知功能，Element 在 Vue 实例上注册了 `$notify` 方法，可以直接以 `this.$notify` 的方式调用它。它接收一个 `options` 字面量参数，在最简单的情况下，只设置 `title` 字段和 `message` 字段，用于设置通知的标题和正文即可。

```vue
<template>
  <div>
    <el-button plain @click="open1"> 不会自动关闭 </el-button>
    <el-button plain @click="open2"> 会自动关闭 </el-button>
  </div>
</template>

<script>
  export default {
    methods: {
      open1() {
        const h = this.$createElement;

        this.$notify({
          title: "来猜个字谜",
          message: h(
            "i",
            { style: "color: #b3e283" },
            "一边是红，一边是绿，一边怕风，一边怕雨"
          ),
          duration: 0,
        });
      },

      open2() {
        this.$notify({
          title: "提示",
          message: "您有一条新消息",
        });
      },
    },
  };
</script>
```

在上面代码中，我们定义了两个按钮绑定了 `open1` 和 `open2`，两个方法之间的不同在于，`open1` 方法中通过设置 `duration:0`，这使得消息提示框不会自动关闭。

除了上面这种朴素的消息通知栏，我们还可以创建带倾向性、自定义弹出位置的通知框。

-   通过 `type` 字段可以设置通知类型，一共有四种，`success`（成功）、`warning`（警告）、`info`（信息）、`error`（错误）。
-   通过 `position` 字段可以设置弹出的位置，一共有四种，`top-left`（左上）、`top-right`（右上）、`bottom-right`（右下）、`bottom-left`（左下）。

```vue
<template>
  <div>
    <el-button plain @click="open1"> 成功 </el-button>
    <el-button plain @click="open2"> 警告 </el-button>
    <el-button plain @click="open3"> 消息 </el-button>
    <el-button plain @click="open4"> 错误 </el-button>
  </div>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$notify({
          title: "成功",
          message: "这是一条成功的提示消息",
          type: "success",
        });
      },

      open2() {
        this.$notify({
          title: "警告",
          message: "这是一条警告的提示消息",
          type: "warning",
          position: "top-left", // 左上角弹出消息
        });
      },

      open3() {
        this.$notify.info({
          title: "消息",
          message: "这是一条消息的提示消息",
          position: "bottom-left", // 左下角弹出消息
        });
      },

      open4() {
        this.$notify.error({
          title: "错误",
          message: "这是一条错误的提示消息",
          position: "bottom-right", // 右下角弹出消息
        });
      },
    },
  };
</script>
```

## Dialog对话框组件

Element UI 给我们提供了 `<el-dialog>` 组件来实现对话框，在其中，我们需要设置 `visible` 属性，它接收 `Boolean`，当为 `true` 时显示 Dialog。

```vue
<template>
  <div>
    <el-button @click="visible = true">快来点击我呀</el-button>
    <el-dialog
      title="猜一猜"
      :visible.sync="visible"
      width="30%"
      :before-close="handleClose"
    >
      <span>欢迎进入字谜游戏。</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="visible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
      };
    },

    methods: {
      handleClose() {
        alert("不能关闭");
      },
    },
  };
</script>
```

-   在上面代码中，我们设置了 `visible` 属性为 false，当点击按钮时被置为 true，显示 Dialog。
-   在 `<el-dialog>` 中，使用 `title` 属性设置了对话框的标题为“猜一猜”。
-   `:visible.sync` 中，`:visible` 是属性绑定，表示弹框的隐藏和显示，当 `:visible` 值为 true 时，表示显示弹框，反之为隐藏弹框；`.sync` 是表示同步的修改 `visible` 的值。
-   `before-close` 是关闭前的回调函数，会暂停 Dialog 的关闭行为，这里我们的回调函数 `handleClose` 只是弹出一个警告框。

**自定义dialog**

在``<el-dialog>``标签中插入其他组件，以达成对应需求

```vue
<template>
  <div>
    <el-button @click="dialogFormVisible = true">点击我</el-button>
    <el-dialog
      title="个人信息登记"
      :visible.sync="dialogFormVisible"
      width="500px"
    >
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.tel" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          name: "",
          tel: "",
        },
        formLabelWidth: "50px",
      };
    },
  };
</script>
```

**嵌套dialog**

```vue
<el-dialog>
	<el-dialog append-to-body></el-dialog>
</el-dialog>
```

```vue
<template>
  <div>
    <el-button @click="outerVisible = true">点击我</el-button>
    <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
      <el-dialog
        width="30%"
        title="内层 Dialog"
        :visible.sync="innerVisible"
        append-to-body
      >
      </el-dialog>
      <div slot="footer" class="dialog-footer">
        <el-button @click="outerVisible = false">取 消</el-button>
        <el-button type="primary" @click="innerVisible = true"
          >打开内层 Dialog</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        outerVisible: false,
        innerVisible: false,
      };
    },
  };
</script>
```

**dialog居中**

使用 `center` 属性让标题和底部按钮居中显示。若想让内容居中显示，请使用 CSS 样式

`Dialog` 的内容是懒渲染，也就是说在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，若需要执行 DOM 操作，或通过 ref 获取相应组件，请在 open 事件回调中进行。

```vue
<template>
  <div>
    <el-button type="text" @click="centerDialogVisible = true"
      >点击打开 Dialog</el-button
    >
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <span class="content">Hello！我是蓝桥云课的小喵喵</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false" size="small"
          >取 消</el-button
        >
        <el-button
          type="primary"
          @click="centerDialogVisible = false"
          size="small"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        centerDialogVisible: false,
      };
    },
  };
</script>
<style>
  .content {
    color: #a2d2ff;
    margin-left: 20%;
  }
</style>
```

## 导航组件

**NavMenu 导航菜单**

在 Element UI 中提供了 `<el-menu>` + `<el-menu-item>` 来实现一个基本的垂直导航菜单。

```vue
<el-menu>
  <el-menu-item></el-menu-item>
  <el-menu-item></el-menu-item>
  ...
</el-menu>
```

```vue
<template>
  <el-menu class="el-menu-vertical-demo">
    <el-menu-item class="item1">
      <i class="el-icon-s-grid"></i>
      全部课程
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <span>后端开发</span>
      </template>
      <el-menu-item-group>
        <el-menu-item>Python</el-menu-item>
        <el-menu-item>Go</el-menu-item>
        <el-menu-item>Java</el-menu-item>
        <el-menu-item>SpringBoot</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <span>前端开发</span>
      </template>
      <el-menu-item-group>
        <el-menu-item>HTML</el-menu-item>
        <el-menu-item>Vue.js</el-menu-item>
        <el-menu-item>CSS</el-menu-item>
        <el-menu-item>TypeScript</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <span>人工智能</span>
      </template>
      <el-menu-item-group>
        <el-menu-item>机器学习</el-menu-item>
        <el-menu-item>OpenCV</el-menu-item>
        <el-menu-item>TensorFlow</el-menu-item>
        <el-menu-item>NLP</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <span>信息安全</span>
      </template>
      <el-menu-item-group>
        <el-menu-item>网络安全</el-menu-item>
        <el-menu-item>网络开发</el-menu-item>
        <el-menu-item>渗透测试</el-menu-item>
        <el-menu-item>密码学</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <span>云计算与大数据</span>
      </template>
      <el-menu-item-group>
        <el-menu-item>Docker</el-menu-item>
        <el-menu-item>AWS</el-menu-item>
        <el-menu-item>OpenStack</el-menu-item>
        <el-menu-item>Hadoop</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<style>
  .el-menu-vertical-demo {
    background: #f3f0d7;
    width: 20%;
  }
  span {
    color: #bbbbbb;
  }
  .item1 {
    background: #e8e8e8;
  }
</style>
```

通过使用 `<el-submenu>` 组件可以生成二级菜单，并使用 `index` 属性设置了每组的唯一标志。

通过使用 `<el-menu-item-group>` 组件可以实现菜单进行分组，并通过具名 slot 设定了分组名。

加一个 `mode` 属性就可以使导航菜单变为水平模式

```vue
<!--只给出新增部分代码-->
<template>
  <el-menu
    class="el-menu-vertical-demo"
    mode="horizontal"
    background-color="#f3f0d7"
    text-color="black"
  >
  ...
</template>
<style>
  .el-menu-vertical-demo {
    background: #f3f0d7;
    width: 20%;
  }
  span {
    color: #bbbbbb;
  }
  .item1 {
    background: #e8e8e8;
  }
</style>
```

**Tabs 标签页**

使用 `<el-tabs>` 和 `<el-tab-pane>` 组件就可以实现基础的标签页。

```vue
<el-tabs>
  <el-tab-pane></el-tab-pane>
  <el-tab-pane></el-tab-pane>
  ...
</el-tabs>
```

```vue
<template>
  <el-tabs v-model="activeName" type="border-card" style="width: 50%">
    <el-tab-pane label="基本信息" name="first">
      <el-input placeholder="输入你的邮箱"></el-input>
      <el-input placeholder="邮箱验证码"></el-input>
      <el-input placeholder="密码"></el-input>
      <el-input placeholder="确认密码"></el-input>
      <el-button>确认</el-button>
    </el-tab-pane>
    <el-tab-pane label="选择类型" name="second">
      <h4>请选择企业注册地，暂只支持以下国家和地区企业类型申请帐号</h4>
      <el-select v-model="value" placeholder="水果分类">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-tab-pane>
    <el-tab-pane label="信息登记" name="third">
      <el-input placeholder="订阅号"></el-input>
      <el-input placeholder="服务号"></el-input>
      <el-input placeholder="企业微信"></el-input>
    </el-tab-pane>
    <el-tab-pane label="公众号信息" name="fourth">
      <el-input placeholder="公众号名"></el-input>
      <el-input placeholder="公众号类型"></el-input>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: "second",
        options: [
          {
            label: "中国大陆",
          },
          {
            label: "中国香港",
          },
        ],
      };
    },
  };
</script>
<style>
  .el-input {
    margin-bottom: 20px;
  }
</style>
```

-   在 `<el-tabs>` 中使用 `v-model` 属性绑定了标签页中的 `name` 属性，用于设置默认选中的标签页，这里我们设置默认选中第一个标签页。
-   在 `<el-tabs>` 中使用 `type` 属性设置标签页卡片化。
-   在 `<el-tab-pane>` 中使用 `label` 属性设置选项卡的标题，使用 `name` 属性与 `<el-tabs v-model="activeName">` 中的 `activeName` 的值对应。

添加 `tab-position` 属性就可以修改标签页的出现位置，该属性有以下四个属性值。

| 属性值 | 说明         |
| ------ | ------------ |
| top    | 显示在顶部。 |
| right  | 显示在右侧。 |
| bottom | 显示在底部。 |
| left   | 显示在左侧。 |

**Breadcrumb 面包屑**

为我们提供了 `<el-breadcrumb>` 和 `<el-breadcrumb-item>` 组件来实现面包屑的效果。

```vue
<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item><a href="#">管理</a></el-breadcrumb-item>
    <el-breadcrumb-item><a href="#">列表</a></el-breadcrumb-item>
    <el-breadcrumb-item><a href="#">详情</a></el-breadcrumb-item>
  </el-breadcrumb>
</template>
```

使用 `separator-class` 属性用来设置以 Icon 图标作为分隔符。我们还可以使用 `separator` 属性来设置字符串类型的分隔符，其默认值为斜杠 `/`

**Dropdown 下拉菜单**

使用 `<el-dropdown>`、`<el-dropdown-item>` 和 `<el-dropdown-menu>` 来实现下拉菜单

```vue
<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      前端方向
      <i class="el-icon-arrow-down"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>HTML</el-dropdown-item>
      <el-dropdown-item divided>jQuery</el-dropdown-item>
      <el-dropdown-item divided>webpack</el-dropdown-item>
      <el-dropdown-item divided>CSS</el-dropdown-item>
      <el-dropdown-item divided>TypeScript</el-dropdown-item>
      <el-dropdown-item divided disabled>更多</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<style>
  .el-dropdown-link {
    color: #00bcd4;
  }
</style>
```

使用 `<el-dropdown>` 标签代表当前是创建的一个下拉菜单；使用 `<el-dropdown-menu>` 代表下拉菜单的菜单表；使用 `<el-dropdown-item>` 代表菜单的每一项。

**Steps 步骤条**

在 Element UI 中提供了 `<el-steps>` 和 `<el-step>` 标签来实现步骤条。

```vue
<template>
  <div>
    <el-steps :active="active" finish-status="success" style="width:50%">
      <el-step title="二级部门"></el-step>
      <el-step title="一级部门"></el-step>
      <el-step title="人力资源部"></el-step>
    </el-steps>
    <el-button type="success" style="margin: 40px 20%" @click="next"
      >下一步</el-button
    >
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 0,
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) {
          alert("审批已通过！");
        }
      },
    },
  };
</script>
```

-   上面定义的导航条一共有三个步骤，使用 `title` 属性为每个步骤设置了步骤名。
-   在 `<el-steps>` 中使用 `finish-status` 属性设置了结束步骤的状态为 `success` 成功。
-   在 `<el-steps>` 中使用 `active` 属性设置当前激活步骤，这里我们设置 `active` 的值为 0，即激活步骤为第一步。
-   使用 `<el-button>` 定义了一个按钮，并绑定了一个点击事件，当我们点击按钮时，触发 `next` 方法，该方法中，使用 `if` 语句判断当前步骤是否大于总步骤数，如果大于则弹出警告框，否则就正常跳转到下一步进行操作。

添加`direction="vertical"`属性可以竖向完成步骤