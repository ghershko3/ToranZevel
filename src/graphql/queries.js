/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getToran = /* GraphQL */ `
  query GetToran($id: ID!) {
    getToran(id: $id) {
      id
      name
      isInOffice
      order
      isOnShift
      createdAt
      updatedAt
    }
  }
`;
export const listTorans = /* GraphQL */ `
  query ListTorans(
    $filter: ModelToranFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTorans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        isInOffice
        order
        isOnShift
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
