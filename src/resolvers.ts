import { IResolvers } from "graphql-tools";
import { User } from "./entity/User";
import * as argon2 from 'argon2';

export const resolvers: IResolvers = {
    Query: {
        initialMessage: () => "From GraphQL"
    },
    Mutation: {
        register: async (_, { email, password }) => {
            const hashedPass = await argon2.hash(password);
            await User.create({
                email,
                password: hashedPass
            }).save();
            return true;
        },
        login: async (_, { email, password }) => {
            const user = await User.findOne({ where: { email } });

            if (!user) {
                return null;
            }

            const validPass = await argon2.verify(user.password, password);

            return validPass ? user : null;
        }
    }
}