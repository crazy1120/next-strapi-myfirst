import gql from "graphql-tag";

const QUERY = ({ locale }: Locale) => gql`
  query {
    landingPage(locale:"${locale}") {
      data {
        attributes {
          page_title
          page_desc
          heroes_section {
            title
            desc
            image {
              data {
                attributes {
                  url
                }
              }
            }
            mobile_image {
              data {
                attributes {
                  url
                }
              }
            }
            link
            link_text
          }
          products_section {
            title
            desc
            image {
              data {
                attributes {
                  url
                }
              }
            }
            link
            link_text
          }
          blogs_section {
            title
            date
            image {
              data {
                attributes {
                  url
                }
              }
            }
            link
          }
        }
      }
    }
  }
`;

export default QUERY;
