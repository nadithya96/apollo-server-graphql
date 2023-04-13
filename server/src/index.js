const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const typeDefs = require("./schema");

const mocks = {

    Query: () => ({
    patients: () => [...new Array(3)],
  }),
  Patient: () => ({
    id: () => "1",
    lastName: () => "data",
    firstName: () => "test",
    emailId: () => "testdata@gmail.com",
    state: () => "California",
//    prescriptions: () => {
//      return ({
//        id: () => "rx-001",
//        name: () => "atorvastatin 10 mg",
//        prescriptionDate: () => "01/01/2023",
//        state: () => ACTIVE,
//        quantity: () => 5,
//        daySupply: () => 5,
//        provider: () => {
//            return{
//                firstName: () => "John",
//                lastName: () => "Doe",
//                npi: () => "65364563546",
//                state: () => "California",
//            };
//        },
//      });
//    },
  }),
};


async function startApolloServer() {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
      mocks,
    }),
  });
  const { url } = await startStandaloneServer(server);

  console.log(`
      🚀  Server is running!
      📭  Query at ${url}
    `);
}

startApolloServer();