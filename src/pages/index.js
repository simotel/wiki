import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
	      {/*<h1 className="hero__title">{siteConfig.title}</h1>*/}
		  {/*<p className="hero__subtitle">{siteConfig.tagline}</p>*/}
		  <p className="hero__title">{translate({message:siteConfig.tagline})}</p> {/*custom added*/}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
              {translate({message:"آشنایی با سیموتل – فقط پنچ دقیقه ⏱️"})}
           
          </Link>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate({message:"siteTitle"})}
      description="Simotel Docs Center">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
