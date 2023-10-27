import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.SERVER_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default client;

// Fetchers for each page
export { default as LANDING_PAGE_QUERY } from "./landing-page";
export { default as POSTS_QUERY } from "./posts";
