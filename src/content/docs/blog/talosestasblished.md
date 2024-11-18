---
title: A new era
date: 2024-11-17
---
Using Clustertool from Truecharts I've set up a new cluster to complete a move away from the TrueNAS SCALE apps system. This exists on a virtual machine on top of TrueNAS. Though an expansion beyond this is definitely in the plans going forwards especially to further improve resiliency.

This has been a big step up in learning with managing more of the core system components myself and writing helm releases to match my personal circumstances. The time investment has been rewarded with a cluster that backs up without further involvement from myself and in the event of disaster is stored as Infrastructure as Code within GitHub. This is all secured with SOPS encryption preventing leaks of secrets. The end result has been a cluster that is far more resilient than the original and the performance has noticeably improved.

Reflecting on the experience, is this suitable for everyone? Absolutely not. The initial bootstrap is undeniably easy but the initial time investment is huge and requires persistence to bridge the knowledge gap. In theory there isn't a massive technical difference between writing a helm release and docker compose especially with the backing of a common chart. There is a lack of documentation for known good configs that would help users installing apps or code blocks to drop in to make the experience smoother. Integrating GitOps has been a big step forward in making the maintenance incredibly easy but the initial construction is considerably more difficult as has finding suitable tooling to integrate into pre merge testing. This will be an avenue for further development.

There is a long way to go to push kubernetes into the homelab and self hosting space a lot of that needs to be spent on bridging the knowledge and tooling gap compared to docker. There is also an impulse to gatekeep knowledge and prevent users from adopting the platform which is wrong.

The whole kubernetes removal from SCALE was deeply unfortunate in the way everyone handled it. It turned way too toxic and that's deeply unfortunate. I personally believe that kubernetes has a lot of benefit and potential to bring to the table and with time I think we can get to docker equivalency in ease of use. For me I plan to keep learning and documenting and see where the journey takes me.
