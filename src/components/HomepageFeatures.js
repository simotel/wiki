import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'رابط کاربری ساده و قدرتمند',
    Svg: require('../../static/img/undraw_Dashboard_re_3b76.svg').default,
    description: (
      <>
      رابط کاربری سیموتل به نحوی طراحی شده است که کاربر بدون درگیر شدن با جزئیات به راحتی بتواند سناریو خود را پیاده سازی کند،قلب تپنده مرکزتماس، <a href="https://dialplan.mysup.ir/" id="intro">دایل پلن </a>این قابلیت را به کاربر می‌دهد تا هر سناریو تماسی را تنها با کشیدن چند کامپوننت در صفحه و اتصال آن‌ها به یکدیگر پیاده سازی کند.
     </>
    ),
  },
  {
    title: 'سیستم گزارش گیری پیشرفته',
    Svg: require('../../static/img/undraw_All_the_data_re_hh4w.svg').default,
    description: (
      <>
	  در بخش گزارشات شما می‌توانید به راحتی ساده‌ترین گزارشات کاربردی را از سیستم بدون دردسر بگیرید، در مقابل در صورت نیاز به گزارشات پیشرفته وشخصی شده فیلتر‌های بسیاری در اختیار شما قرار می‌گیرد،یکی از قابلیت‌های مهم بخش گزارشات امکان نمایش نموداری و انتزاعی داده‌ها می‌باشد.
      </>
    ),
  },
  {
    title: 'شخصی سازی کامل با استفاده از API',
    Svg: require('../../static/img/undraw_building_websites_i78t.svg').default,
    description: (
      <>
پکیج API‍‌ ارائه شده در سیموتل بسیار غنی و قدرتمند است ، شما می‌توانید با استفاده از API‌های ارائه شده سیستمی کاملا پویا بدون نیاز به دخالت انسان را طراحی کنید. برای نمونه می‌توان به سامانه‌های(تماس دوطرفه امن،مشاوره تلفنی،ثبت تیکت خودکار،پرداخت خودکار قبوض و ....) اشاره کرد.
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
