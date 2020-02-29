/* 
	在开发时，如无必要，请不要直接魔改模板的代码，以免在运行时出现意外bug
	这是模板为你预留一个文件，用来对接你的业务逻辑 
 */

// import Vue from 'vue';
export default function(sa_admin, sa) {


	// ================================= 示例：模板基础信息  =================================
	sa_admin.title = 'SA-后台模板';
	// sa_admin.logo_url = '图片地址';    // 设置logo图标地址   默认值空, 代表使用：./admin-logo.png
	// sa_admin.icon_url = '图片地址';    // 设置icon图标地址   默认值空, 代表使用：./favicon.ico


	// ================================= 示例：初始化菜单  =================================
	sa_admin.initMenu(); // 初始化菜单, 不传参代表默认显示所有菜单 菜单在 ./sa-menu-list.js 里,
	// sa_admin.initMenu(['1', '1-1', '1-2', '4']); 	// 传入一个id数组, 显示指定菜单  
 
 
	// ================================= 示例：设置头像昵称  =================================
	// 
	sa_admin.$nextTick(function() {
		sa_admin.user = {
			username: 'root', // 昵称 
			avatar: document.querySelector('.admin-logo').src // 头像地址  
		}
	})
	
	
	// ================================= 示例：js操作菜单  =================================
	
	// this.sa_admin.showHome();            // 显示主页选项卡 
	// this.sa_admin.showTabById('home');    // 显示一个选项卡, 根据id
	// this.sa_admin.closeTabById('5-1');    // 关闭一个选项卡，根据 id （ 第二个参数可填关闭后的回调函数 ）
	// this.sa_admin.showMenuById('5-2');    // 打开一个 菜单，根据 id


	// ================================= 示例：设置登录后的头像处，下拉可以出现的选项  =================================
	sa_admin.dropList = [ // 头像点击处可操作的选项
		{
			name: '我的资料',
			click: function() {
				sa_admin.$message('点击了我的资料，你可以参照文档重写此函数');
			}
		},
		{
			name: '切换账号',
			click: function() {
				sa_admin.openLogin();	// 打开登陆视图 
			}
		},
		{
			name: '退出登录',
			click: function() {
				// sa_admin.$message('点击了退出登录，你可以参照文档重写此函数');
				sa.confirm('退出登录？', function() {
					sa.ajax2('/acc/exit', function() {
						sa.alert('注销成功', function() {
							sa_admin.openLogin();
						})
					}, {msg: '正在注销'});
				});
			}
		}
	]


	// 初始化模板, 必须调用
	sa_admin.init();
	// 或者这样: 
	// sa_admin.init({
	// 	is_show_tabbar: false	// 关闭tabbar栏, 取而显示的是一个面包屑导航栏 
	// }); 



	// ================================= 关于鉴权  =================================
	// sa_admin内部封装了鉴权功能, 可以参考以下api 
	
	// var arr = ['1', '2', '3', 'a', 'b', 'c'];        // 一般由后端提供接口返回当前会话所具有的权限码集合 
	// sa.setAuth(arr);            // 设置当前账号具有的权限码集合 
	
	// sa.checkAuth('a');		// 鉴权会通过
	// sa.checkAuth('y');		// 鉴权会失败, 弹窗提示无权限 
	
	// sa.clearAuth();        // 在注销登录时, 可以清除当前会话所有权限码 
	
	// // 具有指定权限才能显示某个按钮,  示例: 
	// <button v-if="sa.isAuth('a')">删除</button>
	



}
