/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createToran = /* GraphQL */ `
  mutation CreateToran(
    $input: CreateToranInput!
    $condition: ModelToranConditionInput
  ) {
    createToran(input: $input, condition: $condition) {
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
export const updateToran = /* GraphQL */ `
  mutation UpdateToran(
    $input: UpdateToranInput!
    $condition: ModelToranConditionInput
  ) {
    updateToran(input: $input, condition: $condition) {
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
export const deleteToran = /* GraphQL */ `
  mutation DeleteToran(
    $input: DeleteToranInput!
    $condition: ModelToranConditionInput
  ) {
    deleteToran(input: $input, condition: $condition) {
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
