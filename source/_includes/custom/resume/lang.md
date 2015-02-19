### Languages
{% for language in site.data.resume.languages %}
* {: #{{language.name.[page.lang] | downcase | prepend: "lang-"}} }{{ language.name.[page.lang] | capitalize }} ({{ language.level.[page.lang] }}){% endfor %}