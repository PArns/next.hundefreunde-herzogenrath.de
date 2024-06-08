import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

export default function StaticImageFS(props) {
  const data = useStaticQuery(graphql`
    {
      images: allFile(filter: { relativePath: { regex: "/^kurse//" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                quality: 90
                height: 220
                width: 360
              )
            }
          }
        }
      }
    }
  `);

  const { filename, alt, ...other } = props;

  const image = data.images.edges.find((n) => {
    return n.node.relativePath.includes(filename);
  });

  if (!image) {
    return null;
  }

  const imageData = getImage(image.node);
  return <GatsbyImage image={imageData} alt={alt} {...other} />;
}
