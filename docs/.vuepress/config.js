const moment = require("moment")
module.exports = {
	title: "黑猫群管",
	description:
		"黑猫群管是一个多种功能,集群管、娱乐于一体。解放双手,轻松管理QQ群的超级群管工具",
	plugins: {
		"@vuepress/last-updated": {
			transformer: (timestamp, lang) => {
				// 不要忘了安装 moment
				const moment = require("moment")
				moment.locale(lang)
				return moment(timestamp).format("YYYY-MM-DD HH:mm:ss")
			},
		},
		"@vssue/vuepress-plugin-vssue": {
			// 设置 `platform` 而不是 `api`
			platform: "github",

			// 其他的 Vssue 配置
			owner: "zhaoxiaozhang",
			repo: "heimao-doc",
			clientId: "896653867ed5549856a0",
			clientSecret: "d5c2f38e6c4deb05e0dd06d83ac764c7a71f8cf5",
			autoCreateIssue: true,
			// baserUrl: "https://gitee.com",
			locale: "zh",
		},
	},
	themeConfig: {
		lastUpdated: "更新时间",
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
			{
				title: "问题、建议反馈", // 必要的
				path: "/guide/vssue/vssue", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1, // 可选的, 默认值是 1
			},
		],
	},
}
