### Education
{: .section-header }{% if page.school.degree %}{% assign sdeg = page.school.degree %}{% else %}{% assign sdeg = 0 %}{% endif %}
{% for school in site.data.resume.education %}
* {: #{{school.id | prepend: 'school-'}} }{{ school.degree[sdeg] }} [{{ school.name }}]({{ school.url }}){:target="_blank"}{% if school.gradyear %} in {{ school.gradyear }}{% endif %}{% for gpa in school.gpa %}
  - {: #{{ forloop.index | prepend: 'gpa' }} .gpa-entry }{{ gpa[0] | capitalize }} GPA: {{ gpa[1] }}{% endfor %}{% endfor %}