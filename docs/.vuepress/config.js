module.exports = {
	title: "黑猫群管",
	description:
		"黑猫群管是一个多种功能，集群管、娱乐于一体。解放双手，轻松管理QQ群的超级群管工具",
	themeConfig: {
		logo: "/assets/logo-hm-color.png",
		head: [
			["meta", { name: "keywords", content: "黑猫群管,QQ群管,qq群管,qq框架" }],
		],
		nav: [
			{ text: "首页", link: "/" },
			{
				text: "官方QQ群",
				items: [
					{
						text: "用户交流群①",
						link: "https://jq.qq.com/?_wv=1027&k=a43iC1hA",
					},
				],
			},
			{ text: "官网", link: "http://www.heimaocc.com" },
		],
		sidebar: [
			{
				title: "快速上手", // 必要的
				path: "/guide/start/start", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1, // 可选的, 默认值是 1
			},
		],
		lastUpdated: "Last Updated",
	},
}
