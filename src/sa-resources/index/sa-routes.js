// 根据菜单, 推算出路由表 
import menuList from '../sa-menu-list.js';

let routes = [];

// 递归获得所有路由 
function refMenuList(menuList) {
	for (let i = 0; i < menuList.length; i++) {
		let menu = menuList[i];
		// 有子项的递归处理 
		if(menu.childList){
			// menu.children = menu.childList;
			refMenuList(menu.childList);
		} else {
			// 如果是以下
			if(menu.is_blank || menu.click) {
				continue;	// 可以停止了 
			}
			
			// 如果是iframe路由, 则将它更改为iframe视图  
			if(menu.url) {
				let template = '<div class="iframe-view-box"><iframe class="iframe-view" src="' + menu.url + '"></iframe></div>';
				menu.view = {template: template};
			}
			
			// 更改一些属性
			menu.path = menu.path || '/' + menu.id + '';	// 路由默认路径 
			menu.params = menu.params || {};			// 默认参数 
			
			// 创建路由 
			var route = {
				name: menu.rname || menu.path,	// 路由命名 (rname是为了避免和name冲突)(因为name已经用来表示菜单文字了)
				path: menu.path,	// 路由路径 
				components: menu.components,		// 路由视图
			}
			
			// 更改为name式路由 
			if(!route.components) {		
				route.components = {};
				route.components[route.path] = menu.view;
			}
			// menu.is_show = (menu.is_show === false ? false : true);		// 菜单是否显示 (只要没有显式false, 一律按true处理)
			
			// 添加到路由集合 
			routes.push(route);
		}
	}
	// return menuList;
}

refMenuList(menuList);

export default routes;



