import { gql } from "@apollo/client";

export const GET_SECTIONS = gql`
  query GetSections {
    sections {
      id
      label
      description
      displayOrder
      available
      items {
        id
        label
        available
        description
        price
      }
    }
  }
`;
