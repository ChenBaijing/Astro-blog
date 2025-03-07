---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Axios'
pubDate: 2023-03-14
description: 'Axios学习'
author: 'Chen'
tags: ["frontend"]
category: "前端开发"
---
[TOC]



# Axios

## axios常用方法

**get方法**

```js
axios
    .get('path')
	.then((res)=>{})
	.catch((res)=>{})
```

```js
axios.get('url', {
    params: {
        // setting here...
    }
}).then(()=>{}).catch(()=>{})
```

**post方法**

```js
axios.post('url', {
    data: {},
},{
    headers: "xxx"
})
.then(()=>{})
.catch(()=>{})
```

**通用方法**

```js
axios({
    method: "get/post",
    url: "url",
    // get使用
    params: {
        // params here...
    }
    // post使用
    data: {
        // data here...
    }
})
```

## axios和vue钩子函数的结合

在``created()``这个钩子调用时进行数据的操作

```vue
<div id="app">
    <ul>
        <li v-for="item in dataList">{{item}}</li>
    </ul>
</div>

<script>
    let app = new Vue({
        el: "#app",
        data() {
            return {
                dataList: [],
            }
        },
        methods: {
            getData: function() {
                axios.get("data.json").then((res)=>{
                    this.dataList = res.data
                })
            }
        },
        created() {
            this.getData()
        }
    })
</script>
```

## 前端路由

**优点**

1.  页面刷新速度快
2.  复用性强
3.  页面状态可记录

 
