---
sidebar_position: 2
---

# Müşteri Kartı

:::tip BİLGİ

Müşteri kartınızda tüm bilgilere ulaşabilirsiniz. Keyfini çıkarın!

::::

![Müşteri Kartı](/img/tutorial/customer-card.png)


## Muhasebe Bölümü

Müşteri kartınızın en üst kısmında müşterinizle ilgili finansal durumu görebilirsiniz. Bu zamana kadar ne kadar ödeme yaptığı ve kalan bakiyesine ulaşabilirsiniz. İşlemler sekmesinde daha detaylı ödeme bilgileri bulunmaktadır.



## İşlemler Sekmesi

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadatas to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Helloxxx

This is my **first Docusaurus document**!
```

It is also possible to create your sidebar explicitly in `sidebars.js`:

```diff title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
-     items: [...],
+     items: ['hello'],
    },
  ],
};
```
## Bildirimler Sekmesi

## Etiketler
