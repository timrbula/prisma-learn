const { ApolloServer } = require("apollo-server");
const { prisma } = require("./generated/prisma-client");
const typeDefs = require("./schema");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");

const resolvers = {
  Query,
  Mutation
};

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
