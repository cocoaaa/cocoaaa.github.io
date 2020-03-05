Title: Bayesian Data Analysis for dummies like me
Subtitle:
Date: 2020-02-01
Created: 2020-03-08
Tags: bayesian, inference, variational

## Explaining physical phenomenon consistent with observations
Bayesian data analysis is a way to iteratively building a mathemtical description of a physical phenomenon of interest using observed data. 

## Setup
Bayesian inference is a method of statistical inference in which Bayes' Theorem is used to update the probability for a hypothesis ($\theta$) as more evidence or information becomes available [wikipedia].

Therefore, it is used in the following scenario. I'll refer to the workflow as the workflow of "Bayesian data analysis" following Gelman.
1. We have some physical phenomenon (aka. process) of interest that we want to describe with mathematical language. Why? because once we have the description (aka. mathematical model of the physical phenomenon), we can use it to explain how the phenomenon works as a function of its inner components, predict how it would behave as the inner components or its input variables take different values, (... any other usage of the mathematical model?)
2. We decide how to describe the phenomenon using a mathematical language by specifing:
  - Variables 
  - Relations
This is the step of "choosing a model family (aka. a statistical model)"
3. Now we have specified a family of probability models, each of which corresponds to a particular hypothesis/explaination of the physical process of interest. What we need to do is, to choose the "best" hypothesis from all of these possible hypotheses. To do so, we need to observe how the physical phenomenon manifests by collecting data of the outcomes of the phenomenon.
4. Collect data of the outcomes of the phenomenon.
5. "Learn"/"Fit" the model to the data.  (aka, "estimate" the parameters ($\theta$) with the data). In English, this corresponds to "find a hypothesis of the phenomenon that matches the observed data "best"".  To find such hypothesis $\theta \in \Theta$, we need to define what is means to be the "best" hypothesis given the model (aka. Hypothesis space) and the observed data. We formulate this step as an optimization problem:
  - choose a loss function $L(\theta \mid \text{model}, \bar{X})$
  - Solve the optimization problem of finding argmin of the loss:
  $$ \theta^{*} = \arg min  ~~ L(\theta \mid \text{model}, \bar{x})$$
  - Note: $L(\theta \mid \text{model}, \bar{x}) \equiv L(\theta \mid \Theta, \bar{X})$. So we can rewrite the optimization objection as: 
  $$ \theta^{*} = \arg min_{\theta \in \Theta}  ~~ L(\theta \mid  \bar{x})$$

## More specific scenario: a phenomenon with unobservable variables
Most physical phenomenon involves variables that we can't directly observe. These are called "Latent variables", and a statiscal model with such unobservable variables (in addition to observed/data variables) are called "Latent Variable Model".  When we are focusing on the latent variable model, we often use $Z$ as the latent variables and $X$ as the data sample variable. That is, if we have $N$ observation, the sample variable will be a vector of $N$ data variables: $X = \{X_1, X_2, \dots , X_N \}$.  The general setup of Bayesian data analysis workflow above (ie. choose a model $\rightarrow$ collect data $\rightarrow$ fit the model to the data $\rightarrow$ criticize the model $\rightarrow$ repeat).  We can express the bayesian data analysis workflow using these notations as follows:
(Note these notations are consistent with Blei MLSS2019.)

- In English, describe what is the physical phenomenon of interest
- Choose a statistical model by specifying
  - variables (nodes in the graph)
    - data variables (aka. observable variables): $X$
    - latent variables: $Z$
  - relations (edges in the graph)
    - as a (parametrized) function of its nodes   
    
  Let's denote the set of all parameters in the model, $\theta$
  Our statistical model can be expressed as: $P(Z,X; \theta)$
- Collect data: $\bar{X}$
- Fit the model to the observed data
  - Choose a loss function (a function wrt parameters): $L(\theta;\bar{X})$ for $\theta \in \Theta$

## Inference 
Generally speaking, inference (which stems from the Philosophy of Science)

### Bayesian inference method
Bayesian inference is a method of statistical inference in which Bayes' Theorem is used to update the probability for a hypothesis ($\theta$) as more evidence or information becomes available [wikipedia].
- My sketch
![IMAGE](resources/EF0EE1536F7D4D504FFE9DA77F9F81D7.jpg =500x)

It is __not__ a model, it is a general __method__(aka. __technique__, __algorithm__) that allows to infer unknowns probabilistically via computing, eg. marginal and conditional distributions of the model, the distribution over the parameters given observed data, the conditional distribution over the latent variables given the observed data.  

Since it is a general technique (or an appoarch to doing inference) that is not tied to a specific model or a problem, we can use it whenever a suitable setup is presented.  In the Bayesian Data analysis workflow, I see two places where we can use the Bayes theorem to infer some unknown quantities in the model (ie. use bayesian inference to compute unknowns given knowns).

1. Use bayesian inference method to learn the model from the observed data. That is, what is the probability of the parameter of the model given observation?

$$ P(\theta \mid \bar{X})$$

2. Use bayes' theorem to compute the conditional distribution of latent variables given observed data and a fixed parameter (eg. the learned parameter from step 1)
$$ P(Z \mid \bar{X}, \bar{\theta})$$

Note: I was living in the smog under the impression that "Bayeisan inference" is tied to either 1 or 2. But now I understand "bayesian inference" just means computing probability distribution over the unknowns (either because they are unobservable (ie. coditional distribution of latent variables given observed data), or a subset of variables (ie. marginal distribution) that requires further computation on the joint distribution (aka. the probability model)). So, as Wikipedia's definition clarifies, anytime we have a quantitiy (with prior distribution) and make observations regarding a relevant process, we can __update__ the prior distribution using the observed data via Bayes Theorem. That is all that is in the intimidating word "Bayesian inferece". Gosh, can we please give another name to this way of doing computation with a probability model and  data assumed to come from the probability model? "Inference" is such intimedating word. I feel like I need to do philosophy to use this word and everytime I hear this term, I feel like I never understand what the heck it is about because I don't understand what inference means in Philosophy. Yikes! :[

## Approximate Inference
When we cannot compute the "flipped" probability ("flipped" using the Bayes Theorem) because it is, for examplge, too computationally expensive, we sometimes resort to an approximation of the true "flipped" probability. 

### Variational Approximate Inference
People call this "Variational Bayes", which I find it very loaded and unclear whether if the term refers to a method of inference or some model family becuase both "V" and "B" are captialized and it gives me an impressions that it's a name of some specific class of probability distributions. Yikes2! :[ Please give another name to it. 

Variational Approximate Bayesian Inference is:

  > a method of finding a "good" __approximate__ distribution to the "flipped" distribution of your probabity model (ie. $P$ with a fixed parameter $\bar{\theta}$) (ie2: __"flipped" using Bayes theorem__ given your probability model) by formulating a proper __optimization__ problem. 

So far, we have discussed about "bayesian inferece", and the need to sometimes be content with an "approximation" to the "flipped" distribution (given a fixed parameter and obsered data). The last thing to understand is the "variational" part, which correpsonds to formulating the search for a "good" approximation distribution as an optimization problem. As usual for an optimization problem, we need to define "goodness", or in this case "loss"

- Sketch for understanding the motivation for variational bayesian inference method (aka. Variational Bayes)

![IMAGE](resources/2260F69EAA8B990E27B111CB8A80556B.jpg =500x)

[to be continued.....]