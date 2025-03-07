---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'EChart'
pubDate: 2023-03-16
description: 'ECharts学习'
author: 'Chen'
tags: ["frontend"]
category: "前端开发"
---
# ECharts

[TOC]

## Get Started

```js
const chartDOM = document.getElementById("main") // 获取节点
const chart = echarts.init(chartDOM)  // 在节点进行初始化
const option = {
        xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
            type: "value"
        },
        series: [
            {
            	data: [150, 230, 224, 218, 135, 147, 260],
            	type: "line",
            },
        ]
    } // 设置数据
chart.setOption(option)  // 数据添加
```

`option` 相当于是存放组件的容器，而在 `option` 中的 [series](https://echarts.apache.org/zh/option.html#series)、[xAxis](https://echarts.apache.org/zh/option.html#xAxis)、[yAxis](https://echarts.apache.org/zh/option.html#yAxis) 都被称为组件。

## 常用组件

写在option中的可以有以下值

`xAxis`（直角坐标系 X 轴）

`yAxis`（直角坐标系 Y 轴）

`grid`（直角坐标系底板）

`angleAxis`（极坐标系角度轴）

`radiusAxis`（极坐标系半径轴）

`polar`（极坐标系底板）

`geo`（地理坐标系）

`dataZoom`（数据区缩放组件）

`visualMap`（视觉映射组件）

`tooltip`（提示框组件）

`toolbox`（工具栏组件）

`series`（系列）

![图片描述](https://doc.shiyanlou.com/courses/3121/1226977/f4be1be7ef8d28801dd46961b151c2ba-0)

### xAxis & yAxis

**type**

声明轴的类型

-   `value` 是数值轴，适用于连续数据。
-   `category` 是类目轴，适用于离散的类目数据。
-   `time` 是时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同。
-   `log` 是对数轴。适用于对数数据。

**data**

用于存放数据

### grid

**[show](https://echarts.apache.org/zh/option.html#grid.show)** 

是否显示直角坐标系网格。

**[left](https://echarts.apache.org/zh/option.html#grid.left)** 

是 grid 组件离容器左侧的距离。

**[top](https://echarts.apache.org/zh/option.html#grid.top)** 

是 grid 组件离容器上侧的距离。

**[right](https://echarts.apache.org/zh/option.html#grid.right)** 

是 grid 组件离容器右侧的距离。

**[bottom](https://echarts.apache.org/zh/option.html#grid.bottom)** 

是 grid 组件离容器下侧的距离。

### title

**text**

用于设置图标标题

### tooltip

**trigger**

用于设置鼠标位于拐点时是否提示

``item/axis/none``

### legend

**data**

用于现实图例

### toolbox

**feature**

用于添加工具

1.  saveAsImage
2.  dataView
3.  magicType
4.  dataZoom
5.  restore

### series（系列）

用于设置数据

```json
series: [
    {
        data: [],
        type: "line/bar/pie/scatter/graph/tree",
        name: "",
        stack: ""
    }
]
```

**data**

数据

**type**

图标类型，可取``line/bar/pie/scatter/graph/tree``

**name**

系列的名字

**stack**

数据堆叠，同个类目轴上系列配置相同的 `stack` 值后，后一个系列的值会在前一个系列的值上相加。

### dataset（数据集）

![img](https://doc.shiyanlou.com/courses/5788/1347963/fa00da1541cad6ee9a84d07ca8fb5555-0)

## 异步加载数据

在``.setOption()``中实时更新数据即可

## 事件处理

```js
myChart.on("事件名称", 回调函数);
```

事件分为两种类型：

-   鼠标事件，或者悬浮（hover）图表的图形时触发的事件。
-   交互的组件后触发的行为事件，例如数据区域缩放时触发的 `datazoom` 事件。

### 鼠标事件

-   click：点击鼠标时触发。
-   dblclick：在同一个元素上双击鼠标时触发。
-   mouseup：释放按下的鼠标键时触发。
-   mousedown：按下鼠标键时触发。
-   mousemove：当鼠标在一个节点内部移动时触发。
-   mouseover：鼠标进入一个节点时触发。
-   mouseout：鼠标离开一个节点时触发。
-   globalout：鼠标移出坐标系触发。
-   contextmenu：打开上下文菜单时被触发。