import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
//import typeDefs from "./schema";
import { ApolloServer, gql } from "apollo-server";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import MyDatabase from "./dataBaseManager";

const DEVELOPMENT = false

const host = DEVELOPMENT  ? "localhost" : "host.docker.internal";
const knexConfig = {
  client: 'mysql',
  connection: {
    host :  "34.171.152.100",
    user : 'root',
    password : 'root',
    database : `sia_asignaturas_db`,
  }
};



const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  /**
   * For production environments, use
   * ApolloServerPluginLandingPageProductionDefault instead.
   **/
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  dataSources: () => ({
    myDatabase: new MyDatabase(knexConfig),
  }),
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


