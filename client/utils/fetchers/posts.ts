import gql from "graphql-tag";

const QUERY = ({ locale }: Locale) => gql`
    query {
      posts(locale: "${locale}") {
        data {
          id
          attributes {
            title
            cover {
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

export default QUERY;
