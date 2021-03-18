import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';

export default function SEO({ headTitle }) {
  const hasHeadTitle = Boolean(headTitle);
  const baseTitle = 'Camila Cruz - Portfólio';
  const title = hasHeadTitle ? `${headTitle} | ${baseTitle}` : baseTitle;
  const description = '';
  const imageSrc = 'images/logo.png';
  const urlBase = 'https://portfolio-alura-camila-cruz.vercel.app';
  const image = `${urlBase}/${imageSrc}`;

  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:url" content={image} />

      {/* <!-- Twitter -- > */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

SEO.propTypes = {
  headTitle: PropTypes.string,
};
