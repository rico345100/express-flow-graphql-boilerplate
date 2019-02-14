/* @flow */
const fs = require('fs');
const path = require('path');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const config = require('../config/app.json');

// Construct a schema, using GraphQL schema language
const gqlSchema = fs.readFileSync(path.resolve(__dirname, 'graphql/schema.graphql'), 'utf-8')
const typeDefs = gql(gqlSchema);

// Provide resolver functions for your schema fields
const { resolvers } = require('./graphql/index');

const server = express();
const gqlServer = new ApolloServer({ typeDefs, resolvers });
gqlServer.applyMiddleware({ app: server });

server.listen({ port: config.server.port }, () =>
  console.log(`🚀 Server ready at http://localhost:${config.server.port}${gqlServer.graphqlPath}`)
);