module.exports = [
	// { name: 't1', path: '/v1-1', components: {'v1': user_add}  },
	{ path: '/v1-1', components: {'/v1-1': { template: '<div>v1-1</div>' }}  },
	{ path: '/v1-2', components: {'/v1-2': { template: '<div>v1-2</div>' }}  },
	{ path: '/v1-3', components: {'/v1-3': { template: '<div>v1-3</div>' }}  },
	{ path: '/v1-4', components: {'/v1-4': { template: '<div>v1-4</div>' }}  }
	// { path: '/user-add', component: ()=> import('@/sa-view/user-add.vue')  },
	// { path: '/user-list', component: ()=> import('@/sa-view/user-list.vue')  },
];
// module.exports = [
// 	// { name: 't1', path: '/v1-1', components: {'v1': user_add}  },
// 	{ path: '/v1-1', component: { template: '<div>v1-1</div>' }  },
// 	{ path: '/v1-2', component: { template: '<div>v1-2</div>' }  },
// 	{ path: '/v1-3', component: { template: '<div>v1-3</div>' }  },
// 	{ path: '/v1-4', component: { template: '<div><input/></div>' }  },
// 	{ path: '/user-add', component: ()=> import('@/sa-view/user-add.vue')  },
// 	{ path: '/user-list', component: ()=> import('@/sa-view/user-list.vue')  },
// ];