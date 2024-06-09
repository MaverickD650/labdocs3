---
title: Welcome
description: The purpose and direction of this site and homelab
---
Pure and simple I started this site to document my setup, tempt employers and try a cool method of deploying a site. Currently I use Cloudflare Pages to host the site and Github actions to build and deploy the site. I use [Docusaurus](https://docusaurus.io/) to build the site and currently edit it with [VSCode](https://code.visualstudio.com/).

Github actions is used to build the site and deploy it to the Cloudflare Pages. I have a custom domain setup to point to the Cloudflare Pages site. The site automatically builds and deploys when I push to the main branch. Deploying the site to the edge with Cloudflare is a great way to offload simple sites with a fast deploy time and great loading speed for the end user by leveraging Cloudflare's extensive global edge network.

Renovate is used to keep the site up to date with the latest versions of the dependencies. I have a custom config file that is used to keep the site up to date. This is augmented with checks from Github Actions to ensure that the site builds and deploys correctly without accidentally breaking the site. When any PR is created the checks create a test deployment in Cloudflare Pages which can also be checked for visual defects even if it deploys successfully. In the future I'd like to build in checks to make sure deployments don't have major visual defects and prevent any merging.

I would like to try a more slick solution to editing the site, but I am not sure what that would be. I am open to suggestions.
