const gql = require("graphql-tag");
const typeDefs = gql`
    #Schema definition go here

     type Query {
          "Get patient array"
          patients: [Patient!]!
        }

    "Patient can have more than one prescription prescribed by different providers"
    type Patient {
      id: ID!
      lastName: String!
      firstName: String!
      emailId: String!
      state: String!
      prescriptions: [Prescription]
    }

    "Prescription associated with patient"
    type Prescription {
      id: ID!
      name: String!
      prescribedDate: String
      state: State!
      quantity: Int
      daySuppy: Int
      provider: Provider
    }

    "Provider information"
    type Provider{
        firstName: String!
        lastName: String!
        npi: String!
        state: String!
    }

    "Prescription state"
    enum State{
        INACTIVE
        ACTIVE
        DONE
    }
`;

module.exports = typeDefs;