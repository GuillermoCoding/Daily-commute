import gql from 'graphql-tag';
import { fetchJobResults } from '../queries';

const jobResults = {
  defaults: {
    jobResults: {
      __typename: 'jobResults',
      jobs: [],
      index: 0,
    },
  },
  resolvers: {
    Mutation: {
      updateJobResults: (_, { jobs }, { cache }) => {
        const response = cache.readQuery({ query: fetchJobResults });
        const previousJobs = response.jobResults.jobs;
        const data = {
          jobResults: {
            __typename: 'jobResults',
            jobs: previousJobs.concat(jobs),
          },
        };
        cache.writeData({ data });
        return null;
      },
      updateStartingIndex: (_, { index }, { cache }) => {
        const data = {
          joblist: {
            index: 0,
          },
        };
        cache.writeData({ data });
      },
      resetJobResults: (__, variables, { cache }) => {
        cache.writeData({ data: { jobResults: { jobs: [] } } });
      },
    },
  },
};

export default jobResults;
