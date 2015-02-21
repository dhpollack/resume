### Education
{: .section-header }
{% for school in site.data.resume.education %}
* {: #{{school.id | prepend: 'school-'}} }{{ school.degree[0] }} from [{{ school.name }}]({{ school.url }}){:target="_blank"} in {{ school.gradyear }}{% for gpa in school.gpa %}
  - {: #{{ forloop.index | prepend: 'gpa' }} .gpa-entry }{{ gpa[0] | capitalize }} GPA: {{ gpa[1] }}{% endfor %}{% endfor %}