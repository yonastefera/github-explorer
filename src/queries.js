import {
  ApolloClient, InMemoryCache, createHttpLink, gql,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const token = process.env.REACT_APP_GITHUB_TOKEN;
if (!token) throw new Error('you must add github token to .env file');
const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const searchTopics = gql`
    query GetTopics($topicName: String!){
      topic(name: $topicName) {
        name
        relatedTopics(first: 10) {
             name
             stargazerCount
        }
      }
    }
    `;

export const loadTopic = (name) => {
  return client
    .query({
      query: searchTopics,
      variables: {
        topicName: name,
      },
    });
};

loadTopic('react')
  .then((result) => console.log(result));
