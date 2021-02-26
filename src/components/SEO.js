import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
const SEO = ({ children, location, description, title, image }) => {

  const { site } = useStaticQuery(graphql`
query{
  site{
    siteMetadata{
      title
      description
      url 
      image
      twitterUsername

    }
  }
}
`);

  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html lang="en" />
      <title>{title}</title>
      {/* Favicon */}
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      {/* META tags */}

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />

      {/* Open Graph */}

      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || '/logoSqr.svg'} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        propery="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta property="og:description" content={description} key="ogdesc" />
      {children}
    </Helmet>
  )
}

export default SEO;
