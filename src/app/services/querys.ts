import { gql } from "@apollo/client";

const GET_ALL_ARTICLES = gql`
  query GetAllArticles {
    articles {
      data {
        id
        attributes {
          title
          slug
          category
          description
          FeatureImg {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const GET_ARTICLE = gql`
  query ($slug: String!) {
    articles(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          category
          description
          date
          avatar {
            data {
              attributes {
                url
              }
            }
          }
          readTime
          body
          author
          FeatureImg {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const GET_FEATURED_ARTICLES = gql`
  query GetArticles {
    articles(filters: { isFeatured: { eq: true } }) {
      data {
        id
        attributes {
          title
          slug
          category
          description
          FeatureImg {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const GET_RECENT_ARTICLES = gql`
  query GetArticles {
    articles(
      pagination: { limit: 3 }
      filters: { isFeatured: { eq: false }, isCategory: { eq: false } }
    ) {
      data {
        id
        attributes {
          title
          slug
          category
          description
          FeatureImg {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const GET_CATEGORY_ARTICLES = gql`
  query GetArticles {
    articles(filters: { isCategory: { eq: true } }) {
      data {
        id
        attributes {
          title
          slug
          FeatureImg {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export {
  GET_ALL_ARTICLES,
  GET_ARTICLE,
  GET_FEATURED_ARTICLES,
  GET_RECENT_ARTICLES,
  GET_CATEGORY_ARTICLES,
};
