# Vuepress theme css order issue

This is an even simple test.

- No custom layout.
- Just one line in `styles/index.styl` to change navbar title to red.

```
.navbar .site-name
    color red
```

If the navbar color is red, then the css order is below,

```
↑ @theme/styles/index.styl
↑ navbar component style (located at @parent-theme/components/Navbar.vue)
```

If the navbar color is black, then the css order is below,

```
↑ navbar component style (located at @parent-theme/components/Navbar.vue)
↑ @theme/styles/index.styl
```

You will see difference in dev or build mode.