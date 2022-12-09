# 三、FLQ的使用

## 3.1 FLQ介绍

官方网站: https://flycran.gitee.io/flq/

Node与数据库交互的应用层解决方案      ->     通俗说 用于快速查询MySQL库

## 3.2 安装与配置

1. 安装:  使用`yarn`或者`npm`安装`FLQ`    `yarn add flq`

2. 连接数据库:   新建`SQLConnect.ts`

   ``` ts
   import { Flq } from 'flq'
   
   // 建立连接池
   const flq = new Flq({
     pool: true, // 使用连接池
     user: 'root', // 登录用户
     password: '123123', // 登录密码
     database: 'diancan' // 数据库名
   })
   
   export default flq;
   ```

3. 发起查询  `from`配置表名   `find`发起查询

   ``` ts
   const db = flq.from('student')
   db.find().then((e) => console.log(e))
   ```

**核心：** 使用`form` 方法配置表明   其他方法操作

## 3.3 查询

### 基础查询

`find()` 方法

### 只查询一个

`first()`方法

### 查询部分字段

`field()`方法

例如:  `flq.from('student').field('name', { gender: '女' }).find()`

###  条件查询

`where()`方法

例如: `flq.from('student').where({ id: 1 }).find()`

## 3.4 增加

使用`flq.add`方法插入数据

`flq.from('student').value({ name: '小红' }).add()`

## 3.5 删除

使用`flq.del`方法删除数据

 `flq.from('student').where({ id: 1 }).del()`

## 3.6 修改

使用`flq.update`方法修改数据

`flq.form('student').where({ id: 1 }).set({ name: '小红' }).update()`

