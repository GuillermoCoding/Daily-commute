import gql from 'graphql-tag';


export default gql`
  query {
      jobList @client {
        index
      }
  }

`;
