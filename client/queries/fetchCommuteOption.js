import gql from 'graphql-tag';

export default gql`
  query{
    commuteOption @client {
      commuteSelected
    }
  }`;