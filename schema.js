const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(email: String!, name: String!, age: Int!, gender: String!): User!
    updateUser(email: String!, name: String, age: Int, gender: String): User!
    deleteUser(email: String!): User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    gender: String!
    age: Int!
  }

  type AuthPayload {
    token: String
    user: User
  }
`;

module.exports = typeDefs;
