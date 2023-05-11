import { gql } from '@apollo/client';

export const REPOSITORY_DETAILS = gql`
  fragment repositoryDetails on Repository {
    id
    name
    ownerName
    fullName
    stargazersCount
    forksCount
    url
    ownerAvatarUrl
    description
    language
    createdAt
  }
`;

export const USER_DETAILS = gql`
  fragment userDetails on User {
    id
    username
    createdAt
  }
`;

export const REVIEW_DETAILS = gql`
  fragment reviewDetails on Review {
    id
    text
    rating
    createdAt
    repositoryId
    user {
      id
      username
    }
  }
`;
