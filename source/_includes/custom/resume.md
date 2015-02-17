# **{{ site.data.resume.basic_info.name }}**

### **Ethos**

{% if site.data.resume.objectives.[page.employer] %}{{ site.data.resume.objectives.[page.employer][0] }}{% else %}{{ site.data.resume.objectives.general[0] }}{% endif %}

### **Experience**

{% for job in site.data.resume.jobs %}{% assign starttime = job.start_date | date: "%b %Y" %}{% assign endtime = job.end_date | date: "%b %Y" %}  
#### **{{ job.title }}** @ {% if job.url %}[{{ job.name }}]({{ job.url }}){:target="_blank"}{% else %}{{ job.name }}{% endif %} {#{{ job.id }}}
{: .xp-entry }

###### ({% if job.location[0] %}{{ job.location[0] }}{% else %}{{ job.location }}{% endif %} — {{ job.start_date | date: "%b %Y" }}{% if endtime == starttime %}{% elsif job.end_date %} - {{ job.end_date | date: "%b %Y" }}{% else %} - Present{% endif %})
{: .xp-time }  
{% if job.description.[page.employer] %}{{ job.description.[page.employer] }}{% else %}{{ job.description.general }}{% endif %}  
{: .xp-desc }
{% endfor %}

### **Education**
{% for school in site.data.resume.education %}
* {: #{{school.id | prepend: 'school-'}} }{{ school.degree[0] }} from [{{ school.name }}]({{ school.url }}){:target="_blank"} in {{ school.gradyear }}{% for gpa in school.gpa %}
  - {: #{{ forloop.index | prepend: 'gpa' }} .gpa-entry }{{ gpa[0] | capitalize }} GPA: {{ gpa[1] }}{% endfor %}{% endfor %}

### **Languages**
{% for language in site.data.resume.languages %}
* {{ language.name.[page.lang] | capitalize }} ({{ language.level.[page.lang] }}){% endfor %}

### **Duolingo Accomplishments**
* Username: {{ site.data.resume.extras.duolingo.username }}{% for accomplishment in site.data.resume.extras.duolingo.accomplishments %}
* {{ accomplishment }}{% endfor %}

### **Test Scores**
{% for test in site.data.resume.extras.test_scores %}
* {: #{{test.name | downcase}} }{{ test.name }}{% for section in test.sections %}
  - {{ section.name }}: {{ section.score }}{% if section.percentile %} (Percentile: {{ section.percentile }}){% endif %}{% endfor %}{% endfor %}

### **MOOCs**
{% for mooc in site.data.resume.extras.moocs.certificates %}
* {: #{{mooc.id | downcase}} .mooc-cert-entry }[{{ mooc.name }}]({{mooc.certurl}}){:target="_blank"} from {{ mooc.institution }} ({{ mooc.platform }}){% endfor %}

### **Skills**
{% for skill in site.data.resume.extras.skills %}
* {: #{{forloop.index | prepend: 'skill'}} .skill-entry }{{ skill }}{% endfor %}

### **Activities**
{% for activity in site.data.resume.extras.activities %}
* {: #{{forloop.index | prepend: 'activity' }} .activity-entry }{{ activity }}{% endfor %}


\| {{ site.data.resume.basic_info.addresses.berlin.fulladdress }} \| {{ site.data.resume.basic_info.phones[2] }} \| {{ site.data.resume.basic_info.emails[0] }} \|

