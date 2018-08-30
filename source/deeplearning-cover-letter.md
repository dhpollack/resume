---
layout: coverletter
title: "David Pollack - Cover Letter for Machine Learning Engineering Positions"
date: 2015-01-02 00:00
lang: english
employer: deeplearning
description: "Machine Learning Engineering cover letter."
comments: false
sharing: false
makepdf: true
footer: true
---
{% assign jobinfo = site.data.employers.[page.employer] %}
### Cover Letter - [{{jobinfo.jobtitle}}]({{ jobinfo.jobpostingurl }})
{: #cover-letter-header }

TL;DR: knows python, deep-learning, PyTorch, audio, video, AWS.  Got an MSc.  Learning c++ and CUDA.  Hab mich ein bisschen deutsch angeeignet.

Hi, I'm David Pollack.  I'm a former consultant whose spent the past few years developing skills in deep-learning, programming, and mathematics in order to move onto the machine learning / AI career path.  

I am involved in the ML open source community as an [author](https://github.com/pytorch/audio/blob/master/setup.py#L11) of [torchaudio](https://github.com/pytorch/audio), which is [PyTorch](https://pytorch.org/)'s audio sister project.  For my contributions, I have been personally invited to the PyTorch Developer Conference 2018.  I have also made [pull requests](https://github.com/pytorch/pytorch/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Adhpollack+) to the main PyTorch project, most notably to add N-dimensional padding to the library, and I am frequent pull-requester to other smaller projects.  My master's thesis explores musical genre classification of audio clips using traditional spectrogram-based, attention RNN-based and dilated convolutional-based (WaveNet style) architectures.  During my studies, I worked for a fashion video app startup developing an object recognition system to identify different classes of clothing in user-generated videos and to determine the best frame to crop from the video to showcase these clothing items.  I utilized a Mask R-CNN Caffe2-based system, while adding a custom blur detection module to the network.  Additionally, I integrated a style transfer network into the video processing pipeline.  I dockerized my work product and connected everything to the AWS infrastructure.  Thus giving me exposure to ETL and cloud-system administration.  In the NLP realm, I wrote a PyTorch implementation of Bytenet, a character-to-character NMT network.  

In the summer of 2018, I received an MSc in Economics with a specialization in Quantitative Methods from Humboldt Universität.  

My current personal summer projects are widing the scope of the torchaudio project to allow for simpler data augmentation with tighter c++ integrating into [SoX](http://sox.sourceforge.net/) and learning to write CUDA extensions in PyTorch.  As for the future, I am looking to work with a cohesive group of ML engineers to solve the latest problems in audio, video, or NLP.  

Lastly, I am a C1-level German speaker, which is something I'm proud of because I did not speak a word of German before arriving in Germany in 2013.