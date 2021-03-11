import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        limit: 12
        sort: { fields: frontmatter___date, order: ASC }
        filter: { frontmatter: { type: { eq: "post" } } }
      ) {
        nodes {
          frontmatter {
            title
            slug
            author
            topic
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);
  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt,
    image: post.frontmatter.image,
    topic: post.frontmatter.topic,
  }));
};
export default usePosts;
