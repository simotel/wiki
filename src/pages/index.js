import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import { translate } from '@docusaurus/Translate';
import CustomTitle from '@site/src/components/CustomTitle';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
// require('dotenv').config();

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p className="hero__title">{translate({ message: siteConfig.tagline })}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/pbx/introsimotel">
              {translate({ message: "آشنایی با سیموتل – فقط پنچ دقیقه ⏱️" })}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const siteTitle = translate({ message: "siteTitle" });
  const siteTitle2 = translate({ message: "siteTitle2" });
  if (ExecutionEnvironment.canUseDOM) {
    // const { siteConfig } = useDocusaurusContext();
    
    // siteConfig.title = " "
    // siteConfig.titleDelimiter =" "
  }

  let fullTitle = `${siteTitle} | ${siteTitle2}`.replace(/\|?\s*$/, '');
  
  return (
    <Layout
     title={fullTitle}
      description={translate({message: "siteDesc"})}>
      
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
