const { config } = require("vuepress-theme-hope");

module.exports = config({
	title: "Timothy.Ge's Blog",
	description: "记录了一些内容",

	base: "/",
	dest: "./dist",
	// remove this if you are not using Vue and React in "markdownEnhance: code demo"
	head: [
		[
			"script",
			{
				src:
					"https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js",
			},
		],
		[
			"script",
			{
				src:
					"https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
			},
		],
		["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
		[
			"script",
			{
				src:
					"https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js",
			},
		],
	],

	themeConfig: {
		logo: "/logo.svg",
		hostname: "https://gefangshuai.github.io/",

		nav: [
			{ text: "主页", link: "/", icon: "home" },
			{ text: "导航", link: "/home/", icon: "home" },
		],
		sidebar: 'auto',

		author: "Timothy.Ge",

		blog: {
			sidebarDisplay: "mobile",
			links: {
				Zhihu: "https://zhihu.com",
				Baidu: "https://baidu.com",
				Github: "https://github.com",
			},
		},

		comment: {
			type: "valine",
			appId: "msnseO76haIVIGvfJ10BKnpv-gzGzoHsz",
			appKey: "9QMulKhu7EDp1va0TYXR2PrI",
		},

		copyright: {
			status: "global",
		},

		footer: {
			display: true,
			content: "默认页脚",
		},

		mdEnhance: {
			// please only enable the features you need
			enableAll: true,
			presentation: {
				plugins: [
					"highlight",
					"math",
					"search",
					"notes",
					"zoom",
					"anything",
					"audio",
					"chalkboard",
				],
			},
		},

		pwa: {
			favicon: "/favicon.ico",
			cachePic: true,
			apple: {
				icon: "/assets/icon/apple-icon-152.png",
				statusBarColor: "black",
			},
			msTile: {
				image: "/assets/icon/ms-icon-144.png",
				color: "#ffffff",
			},
			manifest: {
				icons: [
					{
						src: "/assets/icon/chrome-mask-512.png",
						sizes: "512x512",
						purpose: "maskable",
						type: "image/png",
					},
					{
						src: "/assets/icon/chrome-mask-192.png",
						sizes: "192x192",
						purpose: "maskable",
						type: "image/png",
					},
					{
						src: "/assets/icon/chrome-512.png",
						sizes: "512x512",
						type: "image/png",
					},
					{
						src: "/assets/icon/chrome-192.png",
						sizes: "192x192",
						type: "image/png",
					},
				],
				shortcuts: [
					{
						name: "Guide",
						short_name: "Guide",
						url: "/guide/",
						icons: [
							{
								src: "/assets/icon/guide-maskable.png",
								sizes: "192x192",
								purpose: "maskable",
								type: "image/png",
							},
							{
								src: "/assets/icon/guide-monochrome.png",
								sizes: "192x192",
								purpose: "monochrome",
								type: "image/png",
							},
						],
					},
				],
			},
		},

		repo: "https://github.com/gefangshuai",
		repoLabel: "Github",
	},
});
