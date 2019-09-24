# Vuepress theme css order issue

<p class="blue">The paragraph is blue if <code>custom.scss</code> is applied.</p>

<p class="red">The paragraph is red if <code>index.styl</code> is applied.</p>

----

The paragraph is red if `index.styl` overrides `custom.scss`, as below:

```
↑ @theme/styles/index.styl
↑ @parent-theme/styles/index.styl
↑ custom.scss (load from layouts/GlobalLayout.vue's style tag)
```

The paragraph is blue if `custom.scss` overrides `index.styl`, as below:

```
↑ custom.scss (load from layouts/GlobalLayout.vue's style tag)
↑ @theme/styles/index.styl
↑ @parent-theme/styles/index.styl
```
