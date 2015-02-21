### Activities
{: .section-header }
{% for activity in site.data.resume.extras.activities %}
* {: #{{forloop.index | prepend: 'activity' }} .activity-entry }{{ activity }}{% endfor %}