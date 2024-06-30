import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            articles: {
              keyArgs: ["filters"],
              merge(existing = [], incoming) {
                return incoming;
              },
            },
          },
        },
        ArticleEntity: {
          fields: {
            attributes: {
              merge(existing, incoming, { mergeObjects }) {
                return mergeObjects(existing, incoming);
              },
            },
          },
        },
      },
    }),
    link: new HttpLink({
      // this needs to be an absolute url, as relative urls cannot be used in SSR
      uri: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/graphql`,
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // fetchOptions: { cache: "no-store" },
    }),
  });
});
