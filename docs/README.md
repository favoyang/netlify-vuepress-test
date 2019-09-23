# Vuepress theme css order issue

<p class="blue">The paragraph is blue if <code>custom.scss</code> is applied.</p>

<p class="red">The paragraph is red if <code>index.styl</code> is applied.</p>

<hr>
<p>The paragraph is red if <code>index.styl</code> overrides <code>custom.scss</code>, as below</p>

<pre><code>↑ custom.scss (load from layouts/Layout.vue's style tag)
↑ @theme/styles/index.styl
↑ @parent-theme/styles/index.styl
</code></pre>

<p>The paragraph is blue if <code>custom.scss</code> overrides <code>index.styl</code>, as below</p>

<pre><code>↑ @theme/styles/index.styl
↑ @parent-theme/styles/index.styl
↑ custom.scss (load from layouts/Layout.vue's style tag)
</code></pre>
