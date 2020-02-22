Title: Multimodal Distribution in Image or Text domain
Subtitle: What does "multimodal distribution" mean in cv literature (eg. image-to-image translation) 
Date: 2019-02-01
Tags: generative-modeling, multimodal, one-to-many-mapping

Q: What does "multimodal distribution" mean in computer vision literature (eg. image-to-image translation)?

While reading papers on conditional image generation using generative modeling (eg. ["Toward Multimodal Image-to-Image Translation"](https://tinyurl.com/s5drg9c) by Zhu et al (NIPS 2017)), I wasn't clear what was meant by "one-to-many mapping" between input image domain and output image domain, "multimodal distribution" in the output image domain, or "multi-modal outputs" (eg. [Quora](https://tinyurl.com/szjmmzf)). 

### Definition
> In statistics, a `multimodal distribution` is a continuous probability distribution with two or more modes (distinct peaks; local maxima) - [wikipedia](https://tinyurl.com/pa47gte)

|(single-variable) bimodal distribution | bivariate multimodal distribution |
|---|---|
|<img src="/images/bimodal.png" alt="bimodal" /> | <img src="/images/bivariate-multimodal.png" alt="bivariate-multimodal" />

<!--|<img src="/images/bimodal.png" alt="bimodal" width="250px"/> | <img src="/images/bivariate-multimodal.png" alt="bivariate-multimodal" width="250px"/>-->
In high-dimensional space (such as an Image domain: $P(X)$ where X lives in $d$-dim space where $d$ is the number of pixels, eg. $32x32=1024$. If each pixel $X_i$ takes a binary value (0 or 1), the size of this image domain is $2^{1024}$.  If each pixel takes an integer value $\in [0,255]$, then the size of this image domain is $256^{1024}$. This, by the way, is too big to compute for Mac's spotlight:

<img src="/images/too-big.png" alt="too-big" width="500px"/>    

What it means by saying "the distribution of (output) image is multimodal" is to say, there are multiple images (ie. realization of the random variable (vector) X) with the (local) maxima value of the probability. In Figure below, the green dots represent the local maxima, ie. modes of the distribution. The configurations (ie. specific values/realizations) that achieves the (local) maximum probability density are the "probable/likely" images. 

<figure>
    <img src='images/gan-multimodal-outputs.jpg' alt='gan-multimodal-outputs' width="250px"/>
     <img src='images/bivariate-multimodal-annot.png' alt='multimodal-annot' width="250px"/>
    <figcaption>The green dots representing modes of the distribution over the image domain (which is abstracted into a 2Dim space for visualization, in this case)</figcaption>
</figure>

So, given one input image, if the distribution of the output image random variable is multi-modal, the standard problem of <pre>Find $x$ s.t. $\underset{x \in \mathcal{X}}{\arg\max} P(X)$ ($\mathcal{X}$ is the image space)</pre> has multiple solutions. According to the paper (Toward Multimodal Image-to-Image Translation), many previous works have produced a "single" output image as "the" argmax of the output image distribution. But this is not accurate if the output image distribution is multi-modal.  We would like to see/generate as many of those argmax configurations/output images. One way to do so, is by sampling from the output image distribution.  This is the paper's approach. 

---
### Multimodal distribution as the distribution over the space of target domains [Domain adaption/transfer leraning]

So far, I viewed the multimodal distribution as a distribution over a specific domain (eg. Image domain), and the random variable corresponded to a realization, eg. an observed/sampled/output image instance. However, 