---
title: Welcome to the Wiki
layout: default
---
### Welcome to GitHub Pages.

All posts:

<ul>
{% for post in site.posts %}
  <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.title }}</a></li>
{% endfor %}
</ul>

Tags:

<ul>
{% for tag in site.tags %}
  <li> {{ tag[0] }}
    <ul>
    {% for page in tag[1] %}
        <li><a href="{{ page.url }}">{{ page.title }}</a></li>
    {% endfor %}
    </ul>
  </li>
{% endfor %}
</ul>

Categories:
<ul>
{% for category in site.categories %}
  <li>{{ category[0] }}</li>
{% endfor %}
</ul>
