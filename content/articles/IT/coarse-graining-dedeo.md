Title: Short note on coarse-graining
Date: 2021-02-23
Tags: coarse-graining, error-tolerance

One of the axioms in Shannon's information theory is that (Shannon's) entropy satisfies coarse-graining property:

<figure>
    <img src="/images/it/coarse-graining-dedeo.png" alt="coarse-graining-dedeo" width="60%" />
    <figcaption> While reading Information Theory for Intelligent People by S.DeDeo
</figure>

This property is closely related to the conditional probabilities.
In communication -- regardless of the types of agents involved, eg. between the people over a phone, between parent cell's DNA to daughter cell's DNA, between a disk storage at time T and that at time T+10), or between me (the writer of this article) and you (the reader),
 there is some 'tolerance' bound that allows "good-enough" intention/semantics to be transmitted and understood between the sender and the receiver.
How is this idea related to the Rate-Distortion theory or error-correcting codes?
Can this idea help us understand/define the "semantic" information (vs. Shannon's Information measure is often called "syntactic" because it is ignorant/invariant to the identities of the events whose probabilities within the process we are measuring the uncertainty of).

<details>
<summary>Pondering... </summary>
<ul>
  <li>Coarse-graining/level of details when describing a process</li>
  <li>As we 'abstract' away from particular representational form of an event/instance, we move from semantics+form domain to &#8594; &#8594; &#8594; semantics+less form domain. This allows me to say "The chair is blue" and you understand what general color the chair is.</li>
  <li>At which level of abstraction / this ladder of coarse-graining, do we get sufficient (ie. good-enough to communication our intentions) level of semantics?</li>
   <li>If we measure $H(\tilde{X})$ at that level, can we say that quantity measures 'semantic information'?</li>
  <li>The difference $H(G)$ is the force/gradient that drives the flow of information -- information of what?</li>
</ul>
</details>


