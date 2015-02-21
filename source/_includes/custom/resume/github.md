### Github{% assign github_username = site.data.resume.extras.github.username %}
{: .section-header }
* Username: [{{ github_username }}](https://github.com/{{ github_username }}){% for project in site.data.resume.extras.github.contributions %}
* {: #{{project.name | remove: '.'| downcase}} .github-entry }[{{ project.name }}]({{project.url}}){:target="_blank"}{% for pr in project.prs %}{% assign titlelen = {{ pr.title | size }} %}
  - {: #{{ project.name | remove: '.' | downcase | append: '-' | append: pr.pullnumber }} .github-pull-entry }[{{ pr.pullnumber }}]({{ pr.url }}) - {% if titlelen < 20 %}{{ pr.title }}{% else %}{{ pr.title | truncate: 17 | append: '...'}}{% endif %}{% endfor %}{% endfor %}