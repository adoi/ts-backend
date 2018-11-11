import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Query {
        initialMessage: String!
    },
    type Mutation {
        register(email: String!, password: String!): Boolean!
    }
`;