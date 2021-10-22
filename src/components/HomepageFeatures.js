import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Livaper',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Müşteri ve Randevu takibinin en kolay yolu Livaper.
      </>
    ),
  },
  {
    title: 'Dokümanlar',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Kullanımı çok kolay! Yardıma ihtiyacınız olduğu anda yardım dokümanlarını inceleyebilirsiniz.
      </>
    ),
  },
  {
    title: 'Şimdi Dene!',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Hemen <code>Livaper'ı</code> 7 gün boyunca ücretsiz kullanmaya başlayın. Kredi kartı gerekmez!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
