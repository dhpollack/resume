---
layout: default
title: 
date: 2014-10-04 00:13
lang: english
comments: false
sharing: false
footer: true
employer: general
description: "This is the resume with no hidden fields."
hideid:
---

{% for page in site.pages reversed %}{% if page.layout == "resume" %}
- [{{ page.title }}]({{page.url}})
{% endif %}{% endfor %}