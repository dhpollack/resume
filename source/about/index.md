---
layout: page
title: About Page
date: 2015-02-21 17:32
comments: false
sharing: false
footer: true
---

### Why did I create an entire website dedicated to my resume?

Honestly, I have grown weary of editing Word, Google Docs, Linkedin, etc, to maintain my resume.  Each of these methods had its own myriad of problems, but the problem they all shared was that the presentation of the document and the data within the document were inseperably fused together.  Each time I created a new version of the document, information needed to be added and/or removed which always caused the formatting of the document to change which led to unnecessary frustration.

Furthermore, the world is no longer on paper.  While an electronic approximation of paper (the PDF) is the norm for resumes, I wanted to create something that could be viewed on paper, a desktop computer, or even a mobile phone.  Thus, this site was born.

### What did you use to create this site?

My first problem was where to write the code for the site.  Local development is great until you get a new computer and lose all your files and/or forget where you put them.  For this project, I wanted to be completely in "[the cloud](http://en.wikipedia.org/wiki/Cloud_computing)".  I develop the site exclusively on [Cloud9](https://c9.io/), which is an online IDE.  I host the site on [Github Pages](https://pages.github.com/) and also [store it](https://github.com/dhpollack/resume) on Github.  Finally, I secure the site with [Cloudflare](https://www.cloudflare.com).

I used the static site generator, [Octopress](http://octopress.org/), with the theme, [Whitespace](https://github.com/lucaslew/whitespace), as the basis for the site.  Then I created a custom "resume" layout, which strips away much of the formatting of the page.  Then I created a master YAML file with [all of the data](https://raw.githubusercontent.com/dhpollack/resume/source/source/_data/resume.yml) that I would want in my resume.  Previous experience, education, special sections, objectives, activities... basically, anything that I thought might be in a resume.  Then I created custom markdown includes to pull data from the YAML file and create a presentable HTML version of the website.

I still wanted to create a potentially unique resume for every possible employer.  So I wrote some javascript with [jQuery](http://jquery.com/) to move and remove elements of the resume as desired, so each version of the resume could be specifically targeted to the applicable position.  I also added a [sortable list](https://github.com/RubaXa/Sortable) library that allows me to move around elements so I can test changes right in the browser (check it out [here](/general.html)).

But I know the world still loves PDFs; futhermore, since I am applying for jobs in Europe and the US, I had to deal with two different paper formats (A4 and Letter).  My solution takes advantage of [PhantomJS](http://phantomjs.org/) to automatically create PDFs in both sizes which were automatically linked to each version of my resume.  Using the CSS @media tags, I tweaked the resumes to look better when printed.

### So what is the final result?

Well, you can checkout the generic resume.  There are a bunch of things that would only be applicable to a specific position, but it's cool to play around with this version.

[David's Sortable Generic Resume](/general.html)

### Notes to Self:

Occasionally, I find useful posts when creating this site.  I am going to list them below:

- [PhantomJS with WebFonts Support](http://arunoda.me/blog/phantomjs-webfonts-build.html)
- [Page Numbers on Printed Pages](http://stackoverflow.com/questions/6109893/page-numbers-with-css-html)
- [PhantomJS 2](http://blog.rampinteractive.co.uk/linux/compiling-phantomjs-2-0-binaries-linux/)

Cheers,
David