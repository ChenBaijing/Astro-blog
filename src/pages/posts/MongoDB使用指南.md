---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'MongoDB使用指南'
pubDate: 2022-08-05
description: 'MongoDB使用指南'
author: 'Chen'
tags: ["frontend"]
category: "前端开发"
---
# MongoDB使用指南

### Part.1

MongoDB的安装

Mongodb的配置

### Part.2

首先使用``mongo``进入MongoDB shell

**Mongodb新建/切换数据库**

```mongo
> use databaseName 
switched to db databaseName
```

**在当前数据库中新建一个文档**

多个文档使用``db.name.insertMany()``

```mongo
> db.name.insertOne({ name:'Alice', age:'18', gender:'F'})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("62eb9d1ee648a11c31e86b97")
}
```

**查找数据**

```mongo
> db.name.find()
{ "_id" : ObjectId("62eb9d1ee648a11c31e86b97"), "name" : "Alice", "age" : 18, "gender" : "F" }  
```

**查看所有数据库**

```mongo
> show dbs
admin      0.000GB
config     0.000GB
local      0.000GB
...
```

**查看当前数据库下的所有集合**

```mongo
> show collections
```

**查找某个数据**

```mongo
> db.name.find({name:'Alice',other filter...})
{ "_id" : ObjectId("62eb9d1ee648a11c31e86b97"), "name" : "Alice", "age" : 18, "gender" : "F" } 

> db.name.find({age: {$lte: 20}})
{ "_id" : ObjectId("62eb9d1ee648a11c31e86b97"), "name" : "Alice", "age" : 18, "gender" : "F" } 

与操作
> db.name.find({age: {$lte: 20}, other filter...})

或操作
> db.name.find({$or: [ {age: {$lte: 20}}, {age: {$gte: 30}} ]})
//小于20或者大于30

显示某个字段
> db.name.find({$or: [ {age: {$lte: 20}}, {age: {$gte: 30}} ]}, {name: 1})
//小于20或者大于30,只显示name字段
```

| Code     | meaning       |
| -------- | ------------- |
| $lte/$lt | 小于等于/小于 |
| $gte/$gt | 大于等于/大于 |
|          |               |

**更新数据**

更新一条数据，前者选中特定数据，后者改变或者设置值

```mongo
> db.name.updateOne({ name: 'Alice'}, { $set: {age: 22} })
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
```

更新多条数据使用``db.name.updateMany({},{})``

**删除数据**

删除全部

```mongo
> db.name.deleteMany({})
```

删除特定的数据只需在``{}``中添加限定符

**退出mongo shell**

```mongo
> quit()
```







