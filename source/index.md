---
layout: empty
title: "resume-test"
date: 2014-10-04 00:13
comments: true
sharing: true
footer: true
---

# **{{ site.data.resume.basic_info.name }}**

### **Objective**

{{ site.data.resume.objectives.general[0] }}

### **Experience**

{% for job_hash in site.data.resume.jobs %}{% assign job = job_hash[1] %}{% assign starttime = job.start_date | date: "%b %Y" %}{% assign endtime = job.end_date | date: "%b %Y" %}
#### **{{ job.title }}** @ {% if job.url %}[{{ job.name }}]({{ job.url }}){% else %}{{ job.name }}{% endif %} ({% if job.location[0] %}{{ job.location[0] }}{% else %}{{ job.location }}{% endif %} — {{ job.start_date | date: "%b %Y" }}{% if endtime == starttime %}{% elsif job.end_date %} - {{ job.end_date | date: "%b %Y" }}{% else %} - Present{% endif %})

{{ job.description.duolingo }}

{% endfor %}

### **Education**
* {{ site.data.resume.education.emory.degree[0] }} from {{ site.data.resume.education.emory.name }} in {{ site.data.resume.education.emory.gradyear }}

### **Languages**
{% for language_hash in site.data.resume.languages %}{% assign language = language_hash[1] %}
* {{ language.native_name | capitalize }} ({{ language.level.[language.english_name] }}){% endfor %}

### **Duolingo Accomplishments**
* Username: {{ site.data.resume.extras.duolingo.username }}{% for accomplishment in site.data.resume.extras.duolingo.accomplishments %}
* {{ accomplishment }}{% endfor %}

### **Test Scores**
{% for test_hash in site.data.resume.extras.test_scores %}{% assign test = test_hash[1] %}
* {{ test_hash[0] | upcase }}{% for section_hash in test.sections %}{% assign section = section_hash[1] %}
  - {{ section_hash[0] | capitalize }}: {{ section.score }} (Percentile: {{ section.percentile }}){% endfor %}{% endfor %}

### **Skills**
{% for skill in site.data.resume.extras.skills %}
* {{ skill | capitalize }}{% endfor %}

### **Activities**
{% for activity in site.data.resume.extras.activities %}
* {{ activity | capitalize }}{% endfor %}

|| {{ site.data.resume.basic_info.addresses.berlin.fulladdress }} ||| {{ site.data.resume.basic_info.phones[2] }} ||| {{ site.data.resume.basic_info.emails[0] }} ||

