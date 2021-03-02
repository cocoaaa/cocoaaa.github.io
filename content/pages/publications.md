Title: Publications

---
## Tutorial
#### Experimental Machine Learning with Holoviews, Geoviews and PyTorch
1.5hr tutorial session @ [PyData LA, 2019](https://pydata.org/la2019/schedule/)
- [materials](https://github.com/cocoaaa/PyData-LA-2019), [video](#)
<!-- (https://www.youtube.com/watch?v=xdux2jwoNw4) -->

This tutorial introduces how to make your data exploration and model building process more interactive and exploratory by using the combination of JupyterLab, HoloViews, and PyTorch.  I will focus on the problem of classfying different types of roads on satellite images, defined as a "multi-class semantic segmentation problem". Starting from the data exploration to the trained model understanding, we will cover different ways to explore the data and models with simple, interactive GUIs in Jupyter notebooks.  Specifically, the tutorial covers, with the emphasis on the experimental nature of model building:

- how to make your data exploration more intuitive and experimental using HoloViews libraries
- how to turn your model script into a simple GUI that allows interactive hyperparameter tuning and model exploration
- how to monitor the training process in realtime
- how to quickly build a GUI tool to inspect the trained models in the same Jupyter notebook

| | | |
|---|---|---|
|![pydata-0](/images/pydata-0.png)|![pydata-1](/images/pydata-1.png)|![pydata-1-2](/images/pydata-1-2.png) |
|![pydata-2](/images/pydata-2.png)|![pydata-3](/images/pydata-3.png)| ![pydata-4](/images/pydata-4.png)|

---
## Papers and Projects

#### An Energy Gradient-Based Approach for Coordinating Smart Vehicles and Traffic Lights at Intersections.
Manuel Rodriguez, Xiangxue Zhao, <em>Hayley Song</em>, Anastasia Mavrommati, Roberto Valenti, Akshay Rajhans, PieterMosterman, Yancy Diaz-Mercado, Hosam K. Fathy.
2021 American Control Conference (ACC)


#### Application of Disentanglement to Map Registration
[In Preparation]

<!-- ### Spatial Knowledge-aware Road Detection from Satellite Images with Reasoning and External Knowledge -->
#### Context-aware segmentation via external knowledge and structured neural net
[In preparation]

- Image segmentation in satellite images is a crucial task in computer vision, with important applications ranging from climate change monitoring, natural disaster responses, route planning, urban planning to security surveillance. Current state-of-the-art algorithms, including deep learning algorithms, have mostly focused on learning meaningful features exclusively from the given images. This results in neglecting a large amount of external information that provides important contexts and spatial cues that could help improve the visual tasks.   In this paper, we propose a new method to achieve a spatial knowledge-aware road detection that improves existing image segmentation algorithms by utilizing spatial semantics from an external knowledge base (ie. the OpenStreetMap database). Our main contribution is first to introduce a notion of spatial semantic score that quantifies the spatial relationship and secondly to propose a new optimization framework to improve the initial prediction to better align with the spatial semantics observed in external knowledge bases. Finally, we show that our approach significantly increases performances measured by IoU, (Relaxed) F1 and Average Path Length Score (APLS) on our satellite dataset.


#### Non-rigid registration of mammogram images using large displacement optical flow with extended flexibility for manual interventions

- Masters Thesis: M. Eng., Massachusetts Institute of Technology, Department of Electrical Engineering and Computer Science, 2018. [Link](https://dspace.mit.edu/handle/1721.1/119572).
- This thesis presents a registration method for mammogram images with extended flexibility for manual inputs from medical specialists. The algorithm was developed as part of the Mammography project led by Professor. Regina Barzilay at MIT CSAIL. Given a sequence of mammogram images, the algorithm finds an optimal registration by considering both the global and local constraints as well as user-defined constraints such as manually selected matching points. This allows the registration process to be guided by both the algorithm itself and human experts. The second half of the thesis focuses on evaluating well-known optical flow and medical registration algorithms on mammogram images. It provides insights into how they perform when encountered by challenges and constraints that are unique in mammogram images.

---
### MINT NetCDF
[website](https://github.com/mintproject/MINT-NetCDF-Convention/blob/master/README.md)

We proposed a self-describing data format for structured gridded datasets for MINT data catalog and visualization based on the NetCDF and the CF convention.  The purpose of this specification is to establish a unified data format within MINT (and in the near future, among World Modelers and broader scientific community) for an efficient data exchange and knowledge discovery.  The document proposes three levels of specification ("Mandatory", "Recommended" and "Optional") for metadata related to space, time and domain-specific semantics of the data.  It provides a unified convention on which information to document as well as a specific format to represent/store the information.  As a result,  it facilitates the creation and sharing of scientific data across different scientific domains such as meteorology, oceanography and GIS, and also has a potential to contribute to novel, interdisciplinary discoveries.

In addition to the proposal, we have created an interactive tool for exploring datasets conforming to this specification, called MINT-GeoViz.

---
### MINT-GeoViz
[code](https://github.com/mintproject/MINT-GeoViz/tree/master?), [demo](https://drive.google.com/drive/folders/1t9E5HsUOre0CgAevkdRAxgaRQghJ_i2v)

MINT-GeoViz is an interactive visualization library for large geospatial datasets that follow our proposed MINT NetCDF convention.  Some examples of such datasets include a collection of year-long satellite images in Africa, global oceanographic time series and hydrographic measurements.  Using efficient data access (via Dask), parallelized computation (via Numba, DataShader) and accurate visualization techniques (via DataShader, ColorCat), it works with datasets of millions or billions of data points in real-time.  For example, a user can visualize the entire earthquake dataset (with 2.1 million seismological events) on a global map.  Our tool goes a step further by allowing the user to perform new computations as they explore the visualization, eg. computing aggregated statistics, transforming high dimensional data to a time series.

| | |
|---|---|
|![fldas-demo-1](/videos/fldas-demo-opt-1-1.gif)| ![fldas-demo-1](/videos/fldas-demo-opt-1-2.gif)|
|![fldas-demo-2](/videos/fldas-demo-opt-1-3.gif)| ![fldas-demo-3](/videos/fldas-demo-opt-1-4.gif)|

---
### Generating Gaussian, Pictures, and Stories with Generative Adversarial Networks
Hayley Song\*, Adam Yala\*

[paper](/pdfs/generating-gaussians-pictures.pdf) <!--(2016 Fall)-->

In this paper, we explore the framework of Adversarial Training as introduced in the original paper by Goodfellow et al.. Generative Aversarial Network (GAN) is a semi-supervised training method and has shown promising results in various tasks such as Image Generation, Transfer Learning, Imitation Learning and Text Generation. We aim to expose the issues and suceesses of GANs while experimenting through diverse generation tasks. Specifically, we work through generating a Gaussian distribution, images, and texts. For each experiement, we investigate the effects of parameters (e.g pre-training of the discriminator) on the convergence and the performance of the adversarial nets.

| |
|---|
|![gan](/images/gan-1.png)|

---
### Cost-effective 3D Reconstruction of Human Arms Using RGBD Sensor for Early Diagnosis of Lymphedema
<em>Hayley Song, Julian Straub, Erik Nyguen, Fernando Yordan, Regina Barzilay</em>

Arm lymphedema is an incurable condition characterized by large swelling of the arms and is commonly seen in breast cancer survivors.  Early detection is crucial for treatment to be effective in mitigating painful symptoms, and yet there is no method that allows physicians to monitor the progression of lymphedema in a way that is cost effective and reliable.  This study proposes a general purpose device that reconstructs a 3D model of objects in view of multiple RGB-D sensors.  This device reconstructs a patient's arm over time which directly extends to measuring and tracking volume change over time.  The accuracy of our system is comparable to the gold standard of water displacement, and is better than the state-of-the-art Perometer.  However it costs significantly less than the Perometer, and is more hygienic than the water displacement method.  It contributes to both short-term and long-term care for the lymphedema patients.  Medical practitioners will be able to provide more timely treatment via accurate reconstruction and volume calculation.  Further the generation of reliable data from our device will enable future studies of lymphedema and its progression.

<img src="/images/3d_recons/3d_recon_prototype.png" alt="3d_recon_prototype" />

<!-- <div class="image12"> -->
<!-- <div class="imgContainer"> -->
<!--     <img src="/images/3d_recons/mgh_tour1.jpg" alt="mgh_tour1" width="45%"/> -->
<!-- </div> -->

<!-- <div class="imgContainer"> -->
<!--     <img src="/images/3d_recons/skinInterferenceSR300.png" alt="sr300" width="45%"/> -->
<!-- </div> -->
<!-- </div> -->

<hr>
### Automatic Cell Detection using HOG features and SVM
Nicha Apichitsopa\*, Boying Meng\*, Hayley Song\*

[paper](/pdfs/6.869-cell-detection.pdf), [slides](/pdfs/6.869-cell-detection-ppt.pdf) (2016 Fall)

<!--TODO: Add video link-->
The analysis of cell trajectories inside microchannels is a critical part of many microfluidic systems. This task requires automated cell detection and cell tracking algorithms in order to reliably extract cell positions over time. Such algorithms need be robust against shape deformation, variable illumination, and noises from sensors and cell movements. In this report, we prove the ability of our machine-learning detection algorithm based on the Histogram of Oriented Gradients (HOG) and Support Vector Machines (SVMs), and compare its performances to the classic image segmentation method. We also investiage different features extracted by various machine learning algorithms and discuss how they affect the performances of cell detection and tracking.

| | |
|---|---|
|![cell-detection-1](/images/cell-detection-1.png)| ![cell-detection-](/images/cell-detection-2.png)|

---
### FreeFlow: Unintrusive Reading Device for Printed Texts
Hayley Song, Suvrit Sra

[paper](/pdfs/free-flow-hjsong.pdf), [poster](/pdfs/free-flow-hjsong-poster.png) (2016 Spring)

![free-flow-demo](/pdfs/free-flow-demo.png)
![free-flow-workflow](/pdfs/free-flow-workflow.png)

FreeFlow is a software for the pen-style, hand-held device that allows a user to search for definitions by “clicking” on the printed text. It is the first end-to-end system that performs such functions with high accuracy (95%) under variable illumination and motion blur from hand movements. It is composed of the four main modules: 1) capture, 2) preprocessing, 3) recogtnition and 4) dictionary search. In this paper, we discuss the details of our system and its performances under various real-world settings.

---
### 3D Air Gesture Recognizer using Dynamic Time Warping and KNN
Hayley Song\*, Chongyuan Xiang\*

[poster](/pdfs/3d-air-gestures-ppt.pdf),
[code and dataset](https://github.com/xiangcy/AirGestureClassifier) (MIT CSAIL, 2016)

In this project, we use the Dynamic Time Warping method and the Neearest Neighbor to design a recognizer for 3D alphabet gestures drawn in the air. We collected the air gesture data from 11 users, and designed the features using speed, acceleration and rotation in the three dimensional space.

![3d-air-gesture-workflow](/pdfs/3d-air-gesture-workflow.png)

---
(*: Equal contribution)

