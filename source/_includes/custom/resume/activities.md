### Activities
{: .section-header }
{% for activity in site.data.resume.extras.activities %}
* {: #{{forloop.index | prepend: 'activity' }} .activity-entry }{% if activity.url %}[{{ activity.name }}]({{ activity.url }}){% else %}{{ activity.name }}{% endif %}{% endfor %}