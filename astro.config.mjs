import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	site: 'https://labdocs.g5yss.uk',
	integrations: [
		starlight({
			plugins: [
				starlightBlog({
					title: 'Homelab Blog',
					authors: {
						maverickd650: {
							name: 'MaverickD650',
							picture: 'https://avatars.githubusercontent.com/u/92877124',
							title: 'Aspiring Homelabber',
						},
					},
				}),
			],
			title: 'MaverickD650 Lab Docs',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/MaverickD650' },
			],
			sidebar: [
				{
					label: 'LLDAP',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'LLDAP', link: '/lldap/lldap/' },
						{ label: 'LLDAP with Authentik', link: '/lldap/authentik/' },
						{ label: 'LLDAP with Authelia', link: '/lldap/authelia/' },
					],
				},
				{
					label: 'Paperless-ngx',
					autogenerate: { directory: 'paperless-ngx' },
				},
			],
		}),
	],
});
