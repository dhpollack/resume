### MOOCs
{% for mooc in site.data.resume.extras.moocs.certificates %}
* {: #{{mooc.id | downcase}} .mooc-cert-entry }[{{ mooc.name }}]({{mooc.certurl}}){:target="_blank"} from {{ mooc.institution }} ({{ mooc.platform }}){% endfor %}