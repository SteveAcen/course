import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	title: "RENAISSANCE",
	tagline: "LEARN IN DIFFERENT WAY",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://your-docusaurus-site.example.com",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "facebook", // Usually your GitHub org/user name.
	projectName: "docusaurus", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	//代表 markdown开启
	markdown: {
		mermaid: true,
	},
	themes: ["@docusaurus/theme-mermaid"],

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "Renaissance",
			logo: {
				alt: "My Site Logo",
				src: "img/logo.svg",
			},
			items: [
				{
					type: "docSidebar",
					position: "right",
					sidebarId: "algorithm",
					label: "数据结构与算法",
				},
				{
					type: "docSidebar",
					position: "right",
					sidebarId: "design",
					label: "系统设计",
				},
				{
					type: "docSidebar",
					position: "right",
					sidebarId: "philosophy",
					label: "先驱与理念",
				},
				{
					type: "docSidebar",
					position: "right",
					sidebarId: "react",
					label: "react",
				},
				{ to: "/blog", label: "动态", position: "right" },
				{
					type: "docSidebar",
					position: "right",
					sidebarId: "community",
					label: "社区",
				},
				{
					href: "https://github.com/Shawn-a11/my-website.git",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "基础课程",
					items: [
						{
							label: "数据结构与算法",
							to: "/docs/algorithm",
						},
						{
							label: "设计模式",
							to: "/docs/algorithm",
						},
					],
				},
				{
					title: "实战课程",
					items: [
						{
							label: "分布式数据设计",
							to: "/docs/algorithm",
						},
						{
							label: "前端实战",
							to: "/docs/algorithm",
						},
					],
				},
				{
					title: "社区",
					items: [
						{
							label: "小红书",
							href: "https://stackoverflow.com/questions/tagged/docusaurus",
						},
						{
							label: "Discord",
							href: "https://discordapp.com/invite/docusaurus",
						},
						{
							label: "B站",
							href: "https://twitter.com/docusaurus",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "Blog",
							to: "/blog",
						},
						{
							label: "GitHub",
							href: "https://github.com/Shawn-a11/my-website.git",
						},
						{
							label: "Gitee",
							href: "https://gitee.com/steveacen/course.git",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} 文艺复兴, Inc.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			additionalLanguages: ["powershell", "go", "java"],
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
