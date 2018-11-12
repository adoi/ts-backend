import * as express from 'express';
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import { createConnection } from "typeorm";

const startServer = async () => {
    const server = new ApolloServer({ typeDefs, resolvers });

    await createConnection();

    const app = express();

    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () =>
        console.log(`🚀  Server ready at ${server.graphqlPath}`)
    );
};

startServer();