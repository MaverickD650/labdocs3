---
title: A New Cluster
date: 2025-08-31
---
After many a year running my cluster on TrueNAS SCALE in some form I've finally moved away from SCALE into a seperate PC for Talos. This has been for many reasons but the virtualization chaos recently has been the final straw. I've moved into using a bare metal install of Talos on an MS01.

There are additional reasons for the move one being the additional downtime from TrueNAS SCALE updates which take the cluster down as well which is not ideal for resilience. Running the two together has also had a considerable performance hit to both systems. Since seperation the two systems have been excelling in their respective roles. It has solidified in my mind that storage is a concept that is best kept seperate from compute and should not be virtualized.

It has been a learning curve moving to the new cluster as a new configuration was required. I borrowed heavily from the Home Ops community and their ideas as well TrueCharts and Clustertool. I've implemented a seperate disk for Talos and Longhorn and while getting the user volume right was tricky it was definitely worth it. The performance increase has been significant and the system is much more responsive.

Still not using a multi-node setup (not made of money!) but I certainly want to explore this more in the future as I want to get to grips with concepts such as Rook Ceph so that I can implement a more resilient storage solution. I also want to explore more of the Talos ecosystem and see what other tools I can use to improve my setup.

Flux Operator is also on my horizon. I've only taken notice of it recently but it seems like a real jump forward and I'm excited to get my hands on it. I'm holding off ideally so that this is implemeneted in Clustertool as I'm time poor in terms of taking over more management of the cluster from Clustertool. It does seem simple to implement and does give me easier management options so it does look to be the way forward. I'm also waiting for better support from Flux Local as I rely on this quite heavily for CI and catching my careless mistakes!
