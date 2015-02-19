### Experience

{% for job in site.data.resume.jobs %}{% assign starttime = job.start_date | date: "%b %Y" %}{% assign endtime = job.end_date | date: "%b %Y" %}  
#### {{ job.title }} @ {% if job.url %}[{{ job.name }}]({{ job.url }}){:target="_blank" .job-url}{% else %}{{ job.name }}{% endif %} {#{{ job.id }}}
{: .xp-entry }

###### ({% if job.location[0] %}{{ job.location[0] }}{% else %}{{ job.location }}{% endif %} — {{ job.start_date | date: "%b %Y" }}{% if endtime == starttime %}{% elsif job.end_date %} - {{ job.end_date | date: "%b %Y" }}{% else %} - Present{% endif %})
{: .xp-time }  
{% if job.description.[page.employer] %}{{ job.description.[page.employer] }}{% else %}{{ job.description.general }}{% endif %}  
{: .xp-desc }
{% endfor %}