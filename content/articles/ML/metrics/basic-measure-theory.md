Title: Basic concepts in measure theory
Date: 2020-02-23
Tags: measure-theory, random-variable, measure, probability-theory

## Measure
![orbanz-1-2](images/orbanz-1-2.png)
- Intuition: roughly a measure is an integral as a function of its region
$$ \mu(A) = \int_{A} dx ~~\text{or,} ~~~\mu(A) = \int_{A} p(x) dx $$
For example, in geometric case, $\mu(A)$ can be interpreted as a (physical) length (if $A$ is one dimensional), mass (if $A$ is two dimensional), or volumn (if three-dim) of a region $A$. In the case that $\mu$ is a measure of probability, $\mu(A)$ is the probability mass of event, "random variable $X$ takes values in the set $A$ (also called event $A$)"

## Density
![orbanz-1-3](images/orbanz-1-3.png)
A (probability) density is a function that transforms one measure to another measure by pointwise reweighting (on the abstract sample space $\Omega$)
![probability-density](/images/Orbanz-probability-density.png)


## Measure-theoretic formalism for Probability
![measure-theory-framework](/images/Orbanz-probability-formal-framework.png)

- abstract probability space vs. observation space
Think of the abstract probability space as the entire system of the universe. A point in the space is a state of the universe (eg. a long vector of values assigned to all existing atoms' states). We often don't have a direct access to this "state", ie. it is not fully observable to us. Instead we observe/measure variables that are some functions of this atomic configuration/state ($w$). This mapping from a state of the universe to a value that the variable of our interest is observed/measured to take is called a "Random Variable". 

## Random Variable
![orbanz-1-4](images/orbanz-1-4.png)
- is a function that maps a outcome in the abstract probability space's sample space $\Lambda$ to the sample space of the observation space $\Omega$ (often $\mathbb{R}$)
- it is the key component that connects the abstract probability space (which we don't get to directly observe) to the observation space
- Image measure $\mu_{X}$ is the (derived/induced) measure on the observation space that is related to the abstract probability space via the random variable $X$. 
  - We need it since the measure on the abstract probability space $\mathbb{P}$ is not known explicitly, but we need to have a way to descirbe the measure of sets in the Borel set of the observation space. 
  - To assign measures to an event in the observation space, we use "Image measure" $\mu_{X}$ which is linked to $\mathbb{P}$ via:
    $$ \mu_{X}(A) := \mathbb{P}(X^{-1}(A))$$
  - In other words, we compute the probability measure of an event $A$ (ie.the probability that the random variable X takes a value in the set A) by:
     1. Map the set A in the observation space to a space in the abstract probability space, $A^{\leftarrow} = X^{-1}(A)$
     2. Compute the probability of event $A^{\leftarrow}$ using $\mathbb{P}$

## Relationship between two random variables and their image measures
"Density" describes the relationship between two random variables and their image measures: 
---
## Source
- Theoretical Foundations of Nonparametric Bayesian Models, by P.Orbanz. MLSS2009: video part [1](http://videolectures.net/mlss09uk_orbanz_fnbm/), [2](https://tinyurl.com/vnzb4pu). Slides [1](http://mlg.eng.cam.ac.uk/mlss09/mlss_slides/Orbanz_1.pdf), [2]() Great introduction of measure theory just as much in detail to be relevant for statistics (and nonparametric Bayesian models)

## More resources
- MLSS09 all lecture and slide links: [here](http://mlg.eng.cam.ac.uk/mlss09/schedule.htm)