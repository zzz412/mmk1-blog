# 2. tabBar

## 2.1 创建 tabBar 页面

在 `pages` 目录中，创建首页(home)、分类(cate)、购物车(cart)、我的(my) 这 4 个 tabBar 页面。在 HBuilderX 中，可以通过如下的两个步骤，快速新建页面：

1. 在 `pages` 目录上鼠标右键，选择**新建页面**
2. 在弹出的窗口中，填写**页面的名称**、**勾选 scss 模板**之后，点击创建按钮。截图如下：

![img](http://escook.cn/docs-uni-shop/assets/img/2-1.a57d1b5c.png)

## 2.2 配置 tabBar 效果

1. 将 `资料` 目录下的 `static 文件夹` 拷贝一份，替换掉项目根目录中的 `static 文件夹`
2. 修改项目根目录中的 `pages.json` 配置文件，新增 `tabBar` 的配置节点如下：

``` json
{
    "tabBar": {
		"selectedColor": "#1baeae",
		"color": "#666",
		"list": [{
				"iconPath": "static/tab_icons/home.png",
				"selectedIconPath": "static/tab_icons/home_active.png",
				"text": "首页",
				"pagePath": "pages/home/home"
			},
			{
				"iconPath": "static/tab_icons/cate.png",
				"selectedIconPath": "static/tab_icons/cate_active.png",
				"text": "分类",
				"pagePath": "pages/cate/cate"
			},
			{
				"iconPath": "static/tab_icons/cart.png",
				"selectedIconPath": "static/tab_icons/cart_active.png",
				"text": "购物车",
				"pagePath": "pages/cart/cart"
			},
			{
				"iconPath": "static/tab_icons/my.png",
				"selectedIconPath": "static/tab_icons/my_active.png",
				"text": "我的",
				"pagePath": "pages/my/my"
			}
		]
	}
}
```

## 2.3 删除默认的 index 首页

1. 在 HBuilderX 中，把 `pages` 目录下的 `index首页文件夹` 删除掉
2. 同时，把 `page.json` 中记录的 `index 首页` 路径删除掉
3. 为了防止小程序运行失败，在微信开发者工具中，手动删除 `pages` 目录下的 `index 首页文件夹`
4. 同时，把 `components` 目录下的 `uni-link 组件文件夹` 删除掉

## 2.4 修改导航条的样式效果

1. 打开 `pages.json` 这个全局的配置文件

2. 修改 `globalStyle` 节点如下：

   ```json
   {
     "globalStyle": {
   		"navigationBarTextStyle": "black",
   		"navigationBarTitleText": "newBee商城",
   		"navigationBarBackgroundColor": "#FFFFFF",
   		"backgroundColor": "#F5F5F5"
   	}
   }
   ```


