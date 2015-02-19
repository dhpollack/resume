### Skills
{% for skill in site.data.resume.extras.skills %}
* {: #{{forloop.index | prepend: 'skill'}} .skill-entry }{{ skill }}{% endfor %}