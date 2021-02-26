Title: Welcome! 
Modified: 2021-02-19  
Template: home  
URL:  
save_as: index.html  
memo: home  
javascripts: https://www.amcharts.com/lib/4/core.js, https://www.amcharts.com/lib/4/charts.js, https://www.amcharts.com/lib/4/maps.js, https://www.amcharts.com/lib/4/geodata/worldLow.js, https://www.amcharts.com/lib/4/geodata/usaTerritoriesLow.js, https://www.amcharts.com/lib/4/themes/animated.js, https://www.amcharts.com/lib/4/plugins/timeline.js,  my_trajectory.js
stylesheets: my_trajectory.css

<div id="chartdiv" height="400"></div>
<div id="mapdiv" height="600"></div>

I'm a Computer Science PhD student at USC interested in how we understand observations from multiple modalities (e.g. images, audio signals and written texts), and how we extract and build representations of the semantics that is invariant across the multimodal observations.

Before starting my PhD, I studied Mathematics and EECS (Electrical Engineering and Computer Science) at MIT for my Bachelors and Masters.  Along the way, I interned at a French robotics startup _Keecker_ and academic research labs in MIT's CSAIL, Media Lab, McGovern Institute and in INRIA.  After my Masters, I worked at Apple as a COOP for 9 months.

My research interest lies at the intersection of __representation learning__ and __information__ theory, inspired by the way our perceptual system integrates __multimodal__ sensory inputs via identifying __invariant semantics__.  I am interested in understanding how the __semantic information__ flows while processing observations from multiple modalities, using tools in deep learning and thermodynamic approaches to information flow. 

My current guiding questions is, 
> _How do we  extract the shared semantics from observations expressed in vastly different representational forms (eg. images,  sounds, written texts), and how do we create/actualize various forms of observations, starting from the semantics we want to communicate?_
<figure>
    <img src="https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fcocoaaa%2FOzdNmX2UzQ.png?alt=media&token=b246a2e5-5e52-418d-8c96-afbbbe84d1b7" alt="multimodal-inputs" style="width:60%">
</figure>


I approach this question from an information-processing point of view and am developing __generative models__ with __disentangled representation__ to jointly learn the analysis and synthesis processes of multimodal data.  My most recent work introduces a generative model with adversarial training that learns spatial semantics from map tiles collected from diverse sources such as satellites, Google Street Map and custom rendering engines.   

- Read more about our dataset of multi-style map tiles [here](#)
- Read more about our work on [Learning a structured ...](#)

Currently, I am exploring different ways to understand our proposed model, in particular, by measuring semantic information and studying the flow of information between the latent partitions.

- How we can quantify the amount of the shared semantic information captured by our model?
- If we view each latent partition as a subsystem that constitutes a global system represented by the whole latent space, then we can view the the adversarial discriminator as a demon (like [Maxwell's Demon](https://en.wikipedia.org/wiki/Maxwell%27s_demon)) sitting at the boarder of the latent subsystems. 
<!--- (How) does the adversary -- the demon sitting at the boarder of the content and style latent partitions -- achieve the non-equilibrium state of the semantic vs. domain-specific information by "sorting" or "organizing" the information into the correct partition as the training happens?-->
- From this point of view, (how) does this adversary -- the demon sitting at the boarder of the content and style latent partitions -- achieve the non-equilibrium state of the semantic vs. domain-specific information by "sorting" or "organizing" the information into the correct partition as the training happens?

It's exciting to see how the ideas and tools in thermodynamics can help quantify and visualize this flow of semantic information in our model :)

<br>
---
## Recent updates
- I'm preparing for a talk at [Scipy 2021](https://www.scipy2021.scipy.org/) in July.
- I got accepted to [2021 Complex Systems Summer School](https://www.santafe.edu/engage/learn/schools/sfi-complex-systems-summer-school) at Santa Fe Institute, Woohoo!
- I gave my first tutorial @ PyData LA, 2019 on "Experimental ML with Holoviews/Geoviews + Pyorch". Here are my talk [slides](/pdfs/experimental-ml-2019-hayley.pdf), [video](#), and [jupyter notebook materials](https://github.com/cocoaaa/PyData-LA-2019)!

| | | |
|---|---|---|
|![pydata-0](/images/pydata-0.png)|![pydata-1](/images/pydata-1.png)|![pydata-1-2](/images/pydata-1-2.png) |
|![pydata-2](/images/pydata-2.png)|![pydata-3](/images/pydata-3.png)| ![pydata-4](/images/pydata-4.png)|

- I participated in [Geo4Good](https://sites.google.com/earthoutreach.org/geoforgood19/home) @ Google in Mtn View, CA! Check out some [highlights](https://tinyurl.com/wdoyepy) of inspiring project going on using Google Earth Engine and Studio. 
- New post: "Total variation, KL-Divergence, Maximum Likelihood"
- New post: "Let's be honest: peeling the assumptions that get us to Variational Autoencoders"
- New post: "Thinking about an observer vs. the observed"
 
    


<br>
---
## Research Questions  
My journey started from noticing our own ability to (i) break down a complex observation into multiple chunks of smaller and abstract concepts and (ii) create a new idea by playing and recombining the conceptual building blocks.  For instance, we can take a glimpse of this dance between abstraction and synthesis in a video of Picasso's live drawing:

<br>
<div align="center">
<iframe  width="672" height="480"" src="https://www.youtube.com/embed/JU9oaD0e7uU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> 
<!--    <iframe  height="420" align="left" src="https://www.youtube.com/embed/Xwbuw1CSFew" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
<!--
<iframe width="672" height="480" src="https://www.youtube.com/embed/Nxes8pyHkJc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="672" height="480" src="https://www.youtube.com/embed/ylh0X38yvQI?t=411" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
-->


More specifically, I'm intrigued by how seamlessly we extract a common semantic content from observations in vastly different representational forms (such as languages, images, gestures or sounds, and infinitely many forms within each modality), and reversely, how a semantic content can be expressed in various forms without losing its (overall) meaning
<label for="sn-note" class="margin-toggle sidenote-number"></label>
<input type="checkbox" id="sn-note" class="margin-toggle"/>
<span class="sidenote">
Hmm.. coarse-graining?</span>.

My exploration starts with an hypothesis that a phenomena in reality, from which
our observations stem from, contains __semantic potentials__("potential" as in
_potential energy_ in Physics, or going further up the stream, as in Aristotle's
["Potentiality and actuality"](https://en.wikipedia.org/wiki/Potentiality_and_actuality)
<label for="sn-note" class="margin-toggle sidenote-number"></label>
<input type="checkbox" id="sn-note" class="margin-toggle"/>
<span class="sidenote">
This idea influenced Leibniz to develop the science of "dynamics". 
Learning about such influence brings light into what Leibniz was struggling to hit the chord with ideas like 'power' and 'action'. Contemplate: Aristotle's "potential:actuality" vs. Leibniz's "power:action"</span>.) 

I wonder,

- What is the relationship between _semantic information_<label for="sn-note" class="margin-toggle sidenote-number"></label>
<input type="checkbox" id="sn-note" class="margin-toggle"/>
<span class="sidenote">
See [An Outline of a Theory of Semantic Information](https://dspace.mit.edu/bitstream/handle/1721.1/4821/RLE-TR-247-03150899.pdf?sequence=1), a [survey](https://plato.stanford.edu/entries/information-semantic/), and more recent work by [Kolchinsky and Wolpert](https://royalsocietypublishing.org/doi/10.1098/rsfs.2018.0041)
</span>
and _semantic potential_, i.e. the underlying _field_ from which individual observations are actualized into an instance of a natural phenomena, an event?
- What is the process -- or geometric constraints -- that leads the same semantics to different representational forms? Can we learn this process from multimodal data?
- What is the process through which an observer builds an understanding -- an internal representation -- of an event?
    - What is the process through which we identify, extract and encode the invariant semantics from observations in diverse modalities?
    - How can we define and measure the semantic information in our representations, efficiently?
- Can we model these processes by __learning a generative model from data collected from multiple modalities__?



## Specific Example
For instance, consider the following observations: $X^A$ is an image of a dog barking on the door, $X^B$ is a recording of a dog barking, and $X^C$ is a sentence written in English language. The semantic content shared across the observations is "there is a dog barking", and each observation is the result of expressing (synm: rendering, stylizing) the semantic content into the form proper for its modality (ie. image, sound, written English language, respectively). 

My question at the representational level is, how do we identify the underlying, shared semantic contents from the domain-specific variations? 
![multi-modal-encoding-of-semantics](/images/semantic_potential/encoding-semantics-from-origin.png)

- How do we identify what is the type of information that is invariant among observations from multiple domains?
- What discovery process goes into separating, or rather identifying, the shared contents (invariance across domain) from domain-specifics?  
- Can we express the process computationally?  
- Can we use learning-based approaches to build a computational model of the process (i)more efficiently, (ii)by leveraging large amount of data available?

Now let's flip the question and consider the generative direction. I tell you the content of our data point is about "a dog barking at the door", and ask you to express this content as image, sound, and an English sentence.  What would be the process of such domain-specific actualization of a semantic information?
![generating-semantics-in-multi-domains](/images/semantic_potential/generating-semantics-in-multiple-domains.png)

- What is the process of recombining the encoded representations to make better decisions, derive new conclusions?

Geometry of modality space: imposes geometric constraints on an observation to satisfy a valid membership in that modality
![geometry-of-modality-space](/images/semantic_potential/geometry-of-modality-space.png)

- E.g. an observation in an image form must satisfy a different set of geometric constraints than that in an acoustic form.
- Can we learn a model of such geometric rules via a generative model with neural networks?

The breakdown of main components of my questions looks as follows:

- Semantic information: Address a limitation of Shannon's theory of Information
- Semantic potentials == a natural phenomena -- is this what "nature" is defined as?
- The process of actualizing the semantic potentials 
- The process during which an observer builds an understanding of the actualized data point
- Geometry of modality space: what is the underlying geometry of a modality space? Can we learn a model of such geometric rules via a generative model with neural networks?


---
## Research Statement
### Learning a generative model of multimodal representation
In pursuit of this computational model of understanding and generating multimodal data, I am developing generative models with disentangled representation to jointly learn the analysis and synthesis processes of complex, high-dimensional data (eg. satellite images, knowledge bases) with compact and “meaningful” representations.  My current project with Prof. [Craig Knoblock](https://usc-isi-i2.github.io/knoblock/) and Prof.[Yao-Yi Chiang](https://spatial.usc.edu/team-view/yao-yi-chiang/) tackles this line of questions using geospatial data, and aims to learn spatial semantics from data that are collected from diverse sources (eg. satellites, Google Street Map, historical maps) and stored in diverse format (eg. images, graphs). This work has potential applications such as global-scale urban environment analysis, automated map synthesis and systems for monitoring environmental changes.

- Read more about our maptile dataset [here](#).
    
Within the domain of representation learning, I’m most interested in variational inference methods, especially recent developments in deep generative models such as variational autoencoders (VAEs) and the idea of adversarial training. 

Using a VAE-variant model and adversarial training, I’m investigating how we can build a model that extracts invariance in a dataset of heterogeneous representations via VAEs and adversarial training.  One of my current projects investigates this question in the domain of spatial informatics, using our new dataset of map tiles from diverse sources.

- Read more about my work, "Learning Bipartitioned Representation of ..." [here](#).


### Next itches
<details>
    <summary>More about next steps...</summary>

<ul>
 <li>Understanding adversary at the latent space from the perspectives of information flow and non-equilibrium achieved by the adversary, ie. the Maxwell's Demon at the gate that distinguishes the two latent partitions</li>
    <ul>
        <li>GAN models are often described in the framework of min-max games between a generator and an adversary. In particular, there has been works making a connection between Nash Equilibrium and local minimum of the GAN's objective function. This connection motivates me to view my adversary (at the latent partitions) as an 'information sorter', like the <a href="https://en.wikipedia.org/wiki/Maxwell%27s_demon">Maxwell's Demon</a>. The goal of this information sorter is to organize the semantic information into one latent partition, and the domain-specific information into the other latent partition, so that each partition (equivalent to a gas chamber in Maxwell's thought experiment) contains only its type of information.  This approach will allow me to bring in computational tools from information theory and theromodynamics (flow of information) to understand how the adversarial information sorter actually achieves the partitioned latent space. </li>
    </ul>
    
 <li>Evaluation of the disentangled partition requires a measure of semantic information </li>
    <ul>
        <li>In order to evaluate how well our semantic latent space captures the semantic information in the inputs, we first need a well grounded _definition of the semantic information_, as well as _computational methods to efficiently compute_ the value.</li>
        <li>See <a href="https://dspace.mit.edu/bitstream/handle/1721.1/4821/RLE-TR-247-03150899.pdf?sequence=1">An Outline of a Theory of Semantic Information]</a>, a nice<a href="https://plato.stanford.edu/entries/information-semantic/">survey</a>, and more recent work by <a href="https://royalsocietypublishing.org/doi/10.1098/rsfs.2018.0041">Kolchinsky and Wolpert</a>.</li>
    </ul>

</details>

---
## Research Traces
<img src="/images/semantic_potential/desert-rocks-adobe-academy.jpeg" alt="desert-rocks" style="width: 60%; height: 50%"/>
<!--src: https://academy.substance3d.com/courses/desert-rocks-making-of-by-jonathan-benainous-->
My interests centers around _understanding_ of complex data and the _processes_ through which such understanding happens. Here are some snapshots along that journey: 

- Interactive visualizations that represent high-dimensional data accurately and efficiently
    - via learning a meaningful and compact representation of observations
    - See [MINT GeoViz](https://github.com/mintproject/MINT-GeoViz/tree/master?), [Mint NETCDF](https://github.com/mintproject/MINT-NetCDF-Convention/blob/master/README.md)
    
- Learning dynamics of neural net
    - How does the model, in particular the representation of input observations, evolve during the training process? Can we detect points at which meaning state transitions happen?
    - How does information flow across the layers of a neural network? Can we visualize this flow to help understand the learning process?
    

See more details [here](/pages/publications.html)


---
## TMI: How much is Too Much Information?
More importantly, I'm practicing to:
- observe without being entangled in what is personal
- look at small thoughts carefully
- not to rush
- spend most of time on what matters most
- be gentle 
- be slow
- be curious
- question
- relax in discomforts
- greet what is as what is, nothing more, nothing less
- stay open

## Quote to nimble
> ‘Your act was unwise,’ I exclaimed ‘as you see
by the outcome.’ He solemnly eyed me.  
‘When choosing the course of my action,’ said he,
‘I had not the outcome to guide me.’   
- Ambrose Bierce


> If you understand what you're doing, you're not learning anything.   
- Einstein



<!--  
- continuously bring stochasity to the current model of world as I believe and,
I worry that too much hopping from the domain of AI/ML to physics, and then ultimately to philosophy will worry my PhD advisors. When the worry quiets itself, however, I see that beaconings of uncomfortable inklings/curious itches often point me to exactly what I should be doing at any moment. 

---
studying the lower-dimensional representation of complex unstructured datasets (eg. multi-spectral satellite images, 3D MRI scans) using deep learning. My work lies in the intersection of statistical machine learning, information theory and coding theory.  I also work on interactive visualization of high-dimensional datasets and complex models (eg. deep neural nets) for a guide to better insight and understanding.

- Information Distillation across domain and modality: Variational Autoencoder
- Invariance in representation: information-theory, "nuisance"
- Dynamics of learning in neural networks: initialization, normalization
    - non-linear and chaos theory
    - emergence
    - information geometry

Before my PhD, I was at MIT studying Mathematics and EECS (Electrical Engineering and Computer Science) for my undergraduate and Masters. After Masters, I interned at Apple as a coop for 9 months.  I also worked on a cool French robotics startup (Keecker) and several academic research labs (MIT CSAIL, MIT Media Lab and INRIA) during my studies.

More about [me](/pages/about-me.html) and papers [here](/pages/publications.html).
---
version1
I'm a 3rd year Computer Science PhD at USC working on a computational model of multimodal representation using generative models.  
My research interest lies at the intersection of representation learning and information theory, inspired by the way our perceptual system integrates multimodal sensory inputs via identifying invariant semantics.  

Before my PhD, I was at MIT studying Mathematics and EECS (Electrical Engineering and Computer Science) for my undergraduate and Masters.  During my studies, I interned at a French robotics startup (Keecker) and academic research labs in MIT CSAIL, MIT Media Lab and INRIA.  After Masters, I worked at Apple as a COOP for 9 months.

My journey started from noticing our own ability to (i) break down a complex observation into multiple chunks of smaller and abstract concepts and (ii) create a new idea by playing and recombining the conceptual building blocks.  For instance, we can take a glimpse of this process of abstraction and synthesis in this video of Picasso's live drawing.


-->