import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'MaverickD650 Lab Docs',
			social: {
				github: 'https://github.com/MaverickD650',
			},
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
