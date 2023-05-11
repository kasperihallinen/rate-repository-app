import { gql } from '@apollo/client';

import { REPOSITORY_DETAILS, REVIEW_DETAILS, USER_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $searchKeyword: String
  ) {
    repositories(
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...repositoryDetails
          ratingAverage
          reviewCount
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      ...repositoryDetails
      ratingAverage
      reviewCount
      reviews {
        edges {
          node {
            ...reviewDetails
          }
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
`;

export const ME = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      ...userDetails
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...reviewDetails
          }
        }
      }
    }
  }
  ${USER_DETAILS}
  ${REVIEW_DETAILS}
`;
