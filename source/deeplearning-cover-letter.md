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

TL;DR: Machine learning engineer formerly at i2x GmbH and Fellowship.ai.  Contributor to Torchaudio, PyTorch, and many other DL OSS projects.  MSc Economics.  Proficient in Python, Bash, Docker, Git.  NLP, ASR, video object recognition.  Hab mir ein bisschen Deutsch angeeignet.

Hi, I'm David Pollack.  I'm an ML Engineer passionate about solving problems in NLP and audio.  I most recently was working at [i2x GmbH](https://i2x.ai/), which is a Berlin-based start-up that does real-time and post-call analysis of customer service phone calls.  I worked primarily on creating production-ready NLP classification solutions using state of the art tools named after various Sesame Street characters.  Previously, I worked at [Fellowship.ai](https://fellowship.ai), which is research arm of the commercial product, [Plaform.ai](https://platform.ai/), and there achieved state of the art [results](https://platform.ai/blog/page/5/surpassing-human-judgement-for-fashion-style/) classifying different fashion styles.  I also [contribute](https://github.com/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Adhpollack+archived%3Afalse+) to open source software projects when I can; these projects include pytorch, torchaudio, huggingface transformers, NVIDIA NeMo, Flux.jl, and more.  

At i2x, my work required a lot more than simply finetuning pretrained BERT models.  We had an in-house labeling team for whom I had to create and define labeling tasks, qc their work, and build pipelines from raw data to production datasets.  Additionally, I built model training tooling around various pytorch libraries for faster, more memory efficient dataloading and multi-GPU training.  Even when using pretrained models, I wrote scripts to optimize them to our use-case with enhancements such as cutting unused vocabulary to cut the size of the embedding layer by up to 60%.  I also worked with large enough amounts of text (GBs compressed) to create in-domain custom word vectors with [fastText](https://fasttext.cc).  Another project that I worked on was using dense sentence embeddings and [approximate nearest neighbors](https://github.com/facebookresearch/faiss) to do a semantic search as a way to seed datasets.  Lastly, while I was never officially on the ASR team, I experimented with using our data within several of the newer ASR systems such as wav2letter, fairseq, and NVIDIA's NeMo.  In doing all this, I've mastered converting from various data formats using either Python or preferably cli tools (awk, sed, jq, sox, etc).  Finally, I managed our local multi-GPU development machines, which requied installing software such as the latest version of CUDA and nvidia-docker.  

I am involved in the ML open source community with highlights including being the [former lead author](https://github.com/pytorch/audio/blob/master/setup.py#L11) of [PyTorch Audio](https://github.com/pytorch/audio), which is [PyTorch's](https://pytorch.org/) project for loading and manipulating audio data.  I widened the scope of the PyTorch Audio project to allow for simpler data augmentation with tighter C++ integration into [SoX](http://sox.sourceforge.net/).  I have been invited to the PyTorch Developer Conference in 2018 and 2019.  I also [contribute](https://github.com/pytorch/pytorch/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Adhpollack+) to the main PyTorch library having originally added N-dimensional padding to the main repo.  Recently, I have contributed the the [NVIDIA NeMo](https://github.com/NVIDIA/NeMo) by allowing for special tokens in their ASR system and by making the library more friendly for non-English ASR.  Despite being a native English speaker, I believe it's a language that gets too much focus especially with open source tools and datasets, and we need more people making sure ML doesn't get overfit to English.  

My master's thesis explored musical genre classification of audio clips using traditional spectrogram-based, attention RNN-based and dilated convolutional-based (WaveNet style) architectures.  During my studies, I worked for a fashion video app startup developing an object recognition system to identify different classes of clothing in user-generated videos and to determine the best frame to crop from the video to showcase these clothing items.  I utilized a Mask R-CNN Caffe2-based system, while adding a custom blur detection module to the network.  Separately, I integrated a style transfer network into the video processing pipeline.  I dockerized my work product and connected everything to the AWS infrastructure.  I am proficient in linux system administration, git, cloud systems (AWS and GCE), and project management.  

In the summer of 2018, I received an MSc in Economics with a specialization in Quantitative Methods from Humboldt Universität.  In my free time, I am learning Rust and Julia.  

As for my goals, I want to find a talented group of ML engineers to solve _meaningful_ problems in audio, NLP, or vision with access to data and resources to work with state of the art technoglies.  

Lastly, I am a C1-level German speaker, which is something I'm very proud of, because I did not speak a word of German before arriving in Germany in 2013.  In fact, at i2x, I even did some of the labeling myself with our German language datasets.  Finally, my other hobbies include bouldering, cycling, pilates, travelling, and cooking.
